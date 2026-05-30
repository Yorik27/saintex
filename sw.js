const cacheName = "fichier-cache-v4"

// On ne pré-cache rien — tout est mis en cache dynamiquement au premier accès
const contentToCache = [];

// Installation
self.addEventListener("install", (e) => {
    console.log("Service Worker v4 — installation");
    self.skipWaiting();
});

// Fetch : cache dynamique
self.addEventListener("fetch", (e) => {
    // Ne pas intercepter les requêtes de navigation
    if (e.request.mode === 'navigate') {
        e.respondWith(fetch(e.request));
        return;
    }

    // Ne pas cacher les requêtes Supabase
    if (e.request.url.includes('supabase.co')) {
        e.respondWith(fetch(e.request));
        return;
    }

    e.respondWith(
        caches.match(e.request).then((r) => {
            return (
                r ||
                fetch(e.request, {cache: "no-store"}).then((response) => {
                    // Ne mettre en cache que les requêtes GET réussies
                    if (!response || response.status !== 200 || e.request.method !== 'GET') {
                        return response;
                    }
                    return caches.open(cacheName).then((cache) => {
                        cache.put(e.request, response.clone());
                        return response;
                    });
                })
            );
        })
    );
});

// Activation : supprimer les anciens caches
self.addEventListener("activate", (e) => {
    console.log("Service Worker v4 — activation");
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== cacheName) {
                        console.log("Suppression ancien cache :", key);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

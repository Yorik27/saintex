const cacheName = "fichier-cache-v5";

// Fichiers essentiels pré-cachés à l'installation
const contentToCache = [
    "/",
    "/index.html",
    "/saintex.css",
    "/saintex.js",
    "/app.js",
    "/themes.js",
    "/dicos_saintex.json",
    "/manifest.webmanifest",
];

// Installation : pré-cacher les fichiers essentiels
self.addEventListener("install", (e) => {
    console.log("Service Worker v5 — installation");
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log("Pré-cache des fichiers essentiels");
            return cache.addAll(contentToCache);
        }).then(() => self.skipWaiting())
    );
});

// Activation : supprimer les anciens caches
self.addEventListener("activate", (e) => {
    console.log("Service Worker v5 — activation");
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

// Fetch : réseau d'abord, cache en fallback
self.addEventListener("fetch", (e) => {
    // Ignorer les requêtes non-GET et les requêtes externes (Supabase, etc.)
    if (e.request.method !== "GET") return;
    const url = new URL(e.request.url);
    if (url.origin !== self.location.origin) return;

    e.respondWith(
        fetch(e.request, { cache: "no-store" })
            .then((response) => {
                // Succès réseau : mettre en cache et retourner
                if (response && response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(cacheName).then((cache) => {
                        cache.put(e.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                // Hors ligne : servir depuis le cache
                return caches.match(e.request).then((cached) => {
                    if (cached) return cached;
                    // Fallback : index.html pour les navigations
                    if (e.request.mode === "navigate") {
                        return caches.match("/index.html");
                    }
                });
            })
    );
});

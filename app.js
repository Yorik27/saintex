if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(reg => {
        console.log('Service Worker enregistré :', reg.scope);
    })
    .catch(err => {
        console.error('Erreur SW :', err);
    });
}

if ('serviceWorker' in navigator) {
    // Désinscrire tous les SW existants puis réinscrire le nouveau
    navigator.serviceWorker.getRegistrations().then(regs => {
        const unregisterAll = regs.map(reg => reg.unregister());
        return Promise.all(unregisterAll);
    }).then(() => {
        // Réinscrire le SW propre
        return navigator.serviceWorker.register('sw.js');
    }).then(reg => {
        console.log('Service Worker réinscrit :', reg);
        reg.update();
    }).catch(err => {
        console.error('Erreur SW :', err);
    });
}

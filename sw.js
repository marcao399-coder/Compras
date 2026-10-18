const CACHE_NAME = 'lista-compras-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icone-192.png',
  'icone-512.png'
];

// Instala o Service Worker e armazena os arquivos estruturais em cache
self.addEventListener('install', (e) => {
  self.skipWaiting(); // Força a atualização imediata se houver uma nova versão
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Ativa o Worker e limpa caches antigos caso haja atualizações
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim()) // Assume o controle da página imediatamente
  );
});

// Estratégia de Cache: Tenta carregar do cache primeiro, senão busca na rede
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});

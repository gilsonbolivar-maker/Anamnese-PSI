/* Guarda o programa no aparelho para abrir sem internet.
   Ao publicar uma versão nova, aumente o número abaixo. */
const VERSAO = "anamnese-psi-v2";
const ARQUIVOS = ["./", "./index.html", "./parte-1.js", "./parte-2.js", "./parte-3.js", "./parte-4.js", "./parte-5.js", "./parte-6.js", "./parte-7.js", "./parte-8.js", "./parte-9.js", "./manifest.json",
  "./icons/icon-192.svg", "./icons/icon-512.svg", "./icons/maskable-512.svg", "./icons/apple-touch-icon.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(nomes => Promise.all(nomes.filter(n => n.startsWith('anamnese-psi-') && n !== VERSAO).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});

/* Com internet: busca a versão mais nova e atualiza a cópia guardada.
   Sem internet: usa a cópia guardada. */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const copia = r.clone(); caches.open(VERSAO).then(c => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});

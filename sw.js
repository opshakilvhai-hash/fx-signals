// অ্যাপ ইনস্টলযোগ্য করার জন্য দরকার। সবসময় নেটওয়ার্ক থেকে টাটকা ডেটা আনে।
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => new Response("অফলাইন: ইন্টারনেট নেই", { status: 503 })));
});

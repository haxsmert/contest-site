self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil((async function(){
  try{var ks=await caches.keys();await Promise.all(ks.map(function(k){return caches.delete(k);}));}catch(_){}
  try{await self.registration.unregister();}catch(_){}
  var cs=await self.clients.matchAll({type:'window'});cs.forEach(function(c){c.navigate(c.url);});
})());});

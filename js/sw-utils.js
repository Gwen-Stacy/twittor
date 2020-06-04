// guarda en el cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res) {
    if(res.ok){
        // si es true entonces la respuesta tiene data y tiene que almacenar en el cache
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        })
    } else {
        return res;
    }
}
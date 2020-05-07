function solution(cacheSize, cities) {
    const [cache, setCache] = useCache(cacheSize);

    let time = 0;
    cities.forEach(v => {
        if(cache.filter(c => c === v.toLowerCase())[0]) {
            time += 1;
        } else {
            time += 5;
        }

        setCache(v);
    })

    return time;
}

function useCache(size) {
    const _queue = [];
    function cache() {
        return _queue;
    }
    function setCache(param) {
        if(size===0) return;
        const lowerParam = param.toLowerCase()
        if(_queue.length < 1) {
            _queue.push(lowerParam);
            return;
        }
        _queue.forEach((v,i) => {
            if(v === lowerParam) {
                _queue.splice(i,1)
                return
            }
        });
        _queue.push(lowerParam);
        if(_queue.length > size) {
            _queue.shift();
        }
    }

    return [cache(), setCache];
}
const arr = ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"];
solution(3, arr);
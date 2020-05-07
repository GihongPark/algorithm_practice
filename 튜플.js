function solution(s) {
    const answer = [];
    const arr = JSON.parse(s.replace(/(\{)/g, '[').replace(/(\})/g, ']'));
    const obj = arr.reduce((a,c) => {
        c.forEach(v => {
            if(!a[v]) a[v] = 1;
            else a[v]++
        });
        return a;
    },{});
    for(const o in obj) {
        answer.push({
            val: o,
            lo :obj[o]
        });
    }
    return answer.sort((a,b) => b.lo-a.lo).map(v => Number(v.val));
}
solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")
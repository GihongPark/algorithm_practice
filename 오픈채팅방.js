function solution(record) {
    const s = record.map(v => v.split(' '));
    const r = s.reduce((a,c) => {
        if(!c[2]) return a;
        
        return {
            ...a,
            [c[1]]: c[2]
        }
    },{});
    return s.filter(v => v[0] !== 'Change').map(v => v[0] === 'Enter' 
        ? `${r[v[1]]}님이 들어왔습니다.`
        : `${r[v[1]]}님이 나갔습니다.`
    );
}
const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan","Leave uid1234"];
solution(record);
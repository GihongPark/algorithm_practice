function solution(array, commands) {
    var answer = [];

    for(const c of commands) {
        const temp = array.slice(c[0]-1,c[1]);
        answer.push(temp.sort((a,b) => a-b)[c[2]-1]);
    }
    return answer;
}
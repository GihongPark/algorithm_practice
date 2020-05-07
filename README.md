# 기본 자료구조 구현

## Stack
* 특징 : LIFO(Last In, First Out)
* 괄호 매칭, 구간합을 구하는데 응용 가능
```javascript
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack[stack.length - 1]  // peek
stack.pop();  // 3
stack.pop();  // 2
stack.pop();  // 1
```

## Queue
* 특징 : FIFO(First In, First Out)
* BFS(Breadth-First Search : 너비 우선 탐색) : 시작 정점을 방문한 후 시작 정점에 인접한 모든 정점들을 우선 방문하는 방법
```javascript
const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

queue.shift();  // 1
queue.shift();  // 2
queue.shift();  // 3
```

## Linked List
```javascript
// 단방향
function Node(val) {
    this.val = val;
    this.next = null;
}
let head = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);

head.next = node1;
node1.next = node2;

// 양방향
function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

let head = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);

head.next = node1;
node1.next = node2;
node1.prev = head;
node2.prev = node1;
```

## Tree
```javascript
function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let root = new Node(5);
let left = new Node(3);
let right = new Node(8);
root.left = left;
root.right = right;
```
```javascript
// 트리 순회
function traversal(node) {
  if (node === null) return;
  
  console.log('preorder', node.val);
  traversal(node.left);
  console.log('inorder', node.val);
  traversal(node.right);
  console.log('postorder', node.val);
}
```

## Map
* [설명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)
* Obj vs Map 
    * Map 
        * key로 함수, 객체 등을 포함한 모든 값이 가능
        * 정렬이 됨 (삽입순으로 순회가능)
        * `size`속성을 통해 쉽게 크기를 알 수 있음
        * 잦은 추가, 제거에 더 좋은 성능을 보임
```javascript
const map = new Map();
map.set('p1', 1);
map.set('p2', 2);

map.get('p1');  // 1
map.get('p2');  // 2
```

## Set
* Map과 비슷하지만, 중복된 값 허용 X
```javascript
const set = new Set();
set.add(1);
set.add(2);

set.has(1);  // true
set.has(2);  // true
set.has(3);  // false
```
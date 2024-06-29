var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(buffer);

console.log(buffer.byteLength);
console.log(i32View.byteLength);
console.log(i32View)
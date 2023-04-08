function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}
function Result() {
   var num1 = document.getElementById('res').value;
   var num2 = eval(num1);
   document.getElementById('res').value = num2;
}
function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0,-1);
}
function Percentage() {
   var ev = document.getElementById('res');
   ev.value = ev.value*0.01;
}
function Pi() {
   var ev = document.getElementById('res');
   ev.value = ev.value*3.14159265;
}
function Sin() {
   var ev = document.getElementById('res');
   ev.value = Math.sin(ev.value)
}
function Cos() {
   var ev = document.getElementById('res');
   ev.value = Math.cos(ev.value)
}
function Tan() {
   var ev = document.getElementById('res');
   ev.value = Math.tan(ev.value)
}
function Log() {
   var ev = document.getElementById('res');
   ev.value = Math.log10(ev.value)
}
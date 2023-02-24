var prevCalc = 0;
var calc = "";

window.onload = function() {
//Getting number elements from HTML
document.getElementById("btn0").onclick = showNum;
document.getElementById("btn1").onclick = showNum;
document.getElementById("btn2").onclick = showNum;
document.getElementById("btn3").onclick = showNum;
document.getElementById("btn4").onclick = showNum;
document.getElementById("btn5").onclick = showNum;
document.getElementById("btn6").onclick = showNum;
document.getElementById("btn7").onclick = showNum;
document.getElementById("btn8").onclick = showNum;
document.getElementById("btn9").onclick = showNum;
document.getElementById("btnDecimal").onclick = showNum;
//Getting function elements from HTML
document.getElementById("btnPlus").onclick = add;
document.getElementById("btnMinus").onclick = subtract;
document.getElementById("btnMul").onclick = mul;
document.getElementById("btnDiv").onclick = div;
document.getElementById("btnSqrt").onclick = sqrt;
document.getElementById("btnReset").onclick = clear;
document.getElementById("btnCalc").onclick = calculate;
document.getElementById("btnDecrement").onclick = decrement;
document.getElementById("btnIncrement").onclick = increment;

document.getElementById("txtNumber").oninput=filterInput;
document.getElementById("txtNumber").value = 0;
}
//Displays current number
function showNum() {
document.frmCalc.txtNumber.value+=this.value;
}

function filterInput(){
var inp = document.frmCalc.txtNumber;
inp.value = inp.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}

function decrement() {
var num = parseFloat(document.frmCalc.txtNumber.value);
if (!(isNaN(num))) {
num--;
document.frmCalc.txtNumber.value = num;
}
}

function increment() {
var num = parseFloat(document.frmCalc.txtNumber.value);
if (!(isNaN(num))) {
num++;
document.frmCalc.txtNumber.value = num;
}
end=true;
}

function add() {
var num = parseFloat(document.frmCalc.txtNumber.value);
if (!(isNaN(num))) {
prevCalc = num;
document.frmCalc.txtNumber.value = "";
calc = "+";
}
}

function subtract() {
var num = parseFloat(document.frmCalc.txtNumber.value);
if (!(isNaN(num))) {
prevCalc = num;
document.frmCalc.txtNumber.value = "";
calc = "-";
}
}

function mul() {
var num = parseFloat(document.frmCalc.txtNumber.value);
if (!(isNaN(num))) {
prevCalc = num;
document.frmCalc.txtNumber.value = "";
calc = "*";
}
}

function div() {
var num = parseFloat(document.frmCalc.txtNumber.value);
if (!(isNaN(num))) {
prevCalc = num;
document.frmCalc.txtNumber.value = "";
calc = "/";
}
}

function sqrt() {
var num = parseFloat(document.frmCalc.txtNumber.value);
if (!(isNaN(num))) {
var sqrtvalue = Math.sqrt(num);
document.frmCalc.txtNumber.value = sqrtvalue;
}
else
document.frmCalc.txtNumber.value="Math Error";
}

function calculate() {
var num = parseFloat(document.frmCalc.txtNumber.value);
var total = 0;
if (!(isNaN(num))) {
if (calc == "+") {
total = prevCalc + num;
} else if (calc == "*") {
total = prevCalc * num;
} else if (calc == "-") {
total = prevCalc - num;
}
else if(calc == "/"){
if(num!=0){
total = prevCalc/num;
}
else
total="Logic Error.";
}
document.frmCalc.txtNumber.value = total;
}
else
document.frmCalc.txtNumber.value="Logic Error";
}

function clear() {
document.frmCalc.txtNumber.value = "0";
prevCalc = 0;
calc = "";
}
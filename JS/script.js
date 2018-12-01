function add() {
    alert("hi");
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var x= a+b;
   console.log(x);
}



function addition(a,b) {
    var x= a+b;
    return x;
}
function multiplication(a,b) {
    var x= a*b;
    return x;
}
function sayhello() {
    console.log("hello justin");
}
console.log(addition(30,40));
console.log(multiplication(30,40));
sayhello();
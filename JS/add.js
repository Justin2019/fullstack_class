function adds() {
   
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var x= parseInt(a)+parseInt(b);
   document.getElementById("result").innerHTML= "<b>"+x+"</b>";
}
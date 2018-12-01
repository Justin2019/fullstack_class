function readValues() {
    console.log("clicked");
    var Name = document.getElementById("name").value;
    
    var Email = document.getElementById("email").value;
    
    var Mob = document.getElementById("mob_number").value;
    
    var password = document.getElementById("password").value;
    
    var cnpass = document.getElementById("con_pass").value;
    
    if(cnpass==password) {
        console.log(Name);
        console.log(Email);
        console.log(Mob);
        console.log(password);
        console.log(cnpass);
    } else {
        alert("Password doesn't match");
    }
}
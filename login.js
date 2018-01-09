function two(){
      
   document.getElementById("signup").style.display="none"; 
    document.getElementById("login").style.display="block";     
}
function one(){
    document.getElementById("signup").style.display="block"; 
    document.getElementById("login").style.display="none";   
}
function show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function show1() {
    var x = document.getElementById("passl");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
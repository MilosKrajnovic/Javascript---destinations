function proveraForme(forma){

    if(forma.ime.value.trim() == "" || forma.prezime.value.trim() ==""){
        alert("Ime i prezime su obavezna polja, popunite ih!")
        return false;
    }

if(forma.ime.value == ""){
    alert("prazno polje - ime");
    forma.ime.focus();
    return false;
}
if(forma.prezime.value == ""){
    alert("prazno polje - prezime");
    forma.prezime.focus();
    return false;
}
if(forma.ime.value[0] != forma.ime.value[0].toUpperCase()){
    alert("Ime mora pocinjati velikim slovom");
    forma.ime.focus();
    return false;
}
if(forma.prezime.value[0] != forma.prezime.value[0].toUpperCase()){
    alert("Prezime mora pocinjati velikim slovom");
    forma.prezime.focus();
    return false;
}

return true;
};

function membershipEnable(param){
if(param.checked){
    document.getElementById("sel1").disabled = false;
}else {
     document.getElementById("sel1").disabled = true;
}
colorButton();
}

function colorButton(){
    
  var element =  document.getElementById("sel1");
  var button = document.getElementById("submitbtn");
  if(element.disabled){
    btn.style.backgroundColor = "white";
}else{
if ( element.value == 1){
button.style.backgroundColor = "silver";
}
else if (element.value == 2) {
    button.style.backgroundColor = "gold";
}
else if (element.value == 3) {
    button.style.backgroundColor = "skyblue";
}
}
}
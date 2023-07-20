

var button = document.getElementById("submit");
button.onclick = function(){
     let fname = document.getElementById("fname").value;
console.log(fname);

let lname = document.getElementById("lname").value;
console.log(lname);

let add = document.getElementById("add").value;
console.log(add);

let pin = document.getElementById("pin").value;
console.log(pin);
//let gender = document.querySelector('input[name="gender"]:checked').value;
//console.log(gender);

let choosefoods = [];
let checkboxes = document.getElementsByName('interest');
for(let i=0;i<checkboxes.length;i++){
if(checkboxes[i].checked){
     choosefoods .push(checkboxes[i].value);
}
}
console.log(choosefoods);

let state= document.getElementById("state").value;
console.log(state);

let country = document.getElementById("country").value;
console.log(country);
     console.log(fname,lname,add,pin,choosefoods,state,country)
}


var local = JSON.parse(localStorage.getItem('item')) || []; 



function store() {
  // e.preventDefault()
  var name = document.getElementById("name");
  var pw = document.getElementById("pw");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;



var nameObj = name.value
var pwObj = pw.value

var obj = {nameObj, pwObj};
local.push(obj)


console.log(name);

if(name && pw){

  
  if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (pw.value.length == 0) {
    alert("Please fill in password");
  } else if (name.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (pw.value.length > 8) {
    alert("Max of 8");
  } else if (!pw.value.match(numbers)) {
    alert("please add 1 number");
  } else if (!pw.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!pw.value.match(lowerCaseLetters)) {
    alert("please add 1 lovercase letter");
  } else {
 
    // localStorage.setItem("name", name.value);
    // localStorage.setItem("pw", pw.value);
    
    
    alert("Your account has been created");
        
    localStorage.setItem('item', JSON.stringify(local))
        
    clickMoveRegister = document.querySelector('.clickMoveRegister')
    clickMoveRegister.style.display = 'none'; 

    clickMoveSignIn = document.querySelector('.clickMoveSignIn')
  
  
  }
  // return false
  
}
  
}

//checking
function check() {
  // var storedName = localStorage.getItem("name");
  // var storedPw = localStorage.getItem("pw");



  var userName = document.getElementById("userName");
  var userPw = document.getElementById("userPw");
  var userRemember = document.getElementById("rememberMe");


  var userFound = local.filter((e, i) => {
    return e.nameObj == userName.value && e.pwObj == userPw.value;
  })
  console.log(userFound, 'userFound')

  // if (userName.value == storedName && userPw.value == storedPw) {
  //   alert("You are logged in.");
  // } else {
  //   alert("Error on login");
  // }


  if(userFound.length > 0){
    alert("You are logged in.");
  }else{
   alert("Error on login");
  }
}


var rgstr_btn = document.getElementById('rgstr_btn')  
rgstr_btn.addEventListener('click', (e)=>{
  e.preventDefault()
  store()
})


var newNameClickMoveSignInABC = document.createElement('div')
newNameClickMoveSignInABC.classList.add('screen')
document.body.appendChild(newNameClickMoveSignInABC)

var newNameClickMoveSignInABC
var clickMoveSignIn = document.querySelector('#login_btn')
clickMoveSignIn.addEventListener('click', (e)=>{
e.preventDefault() 

// newNameClickMoveSignInABC = document.createElement('div')
// newNameClickMoveSignInABC.classList.add('screen')
// document.body.appendChild(newNameClickMoveSignInABC)


var getFromLocal = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : []









// newNameClickMoveSignInABC.innerHTML =  
// newNameClickMoveSignInABC.style.color = 'black'

check()

renderData(getFromLocal)
})

function renderData(emptyArray){


emptyArray.forEach((element, index)=>{

  // name output screen
  var createNameOutput = document.createElement('p');
  createNameOutput.classList.add('nameOutputChild')
  newNameClickMoveSignInABC.appendChild(createNameOutput)

  // nameObj.innerHTML.value = element;






  



// nameObj.innerHTML.value 









})











}













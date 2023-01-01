let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


function vali() {
  let x = document.getElementById("uname"). value;
  let y = document.getElementById("psw"). value;
  var email_vali= /\S+@\S+\.\S+/;
  var v1=true;
  var v2=true;
  var v3=true;
  if (x == "") {
    alert("Name must be filled out");
    v1=false;
  }
  if (y == "") {
    alert("password must be filled out");
    v2=false;
  }
  
    //Validate TextBox value against the Regex.
    var validation = email_vali.test(document.getElementById("email").value);
    if (!validation) {
    alert("Not an email address");
    v3=false;
    } 
			
		if(v1&&v2&&v3){
window.open('watch.html');
}

}

function pass_validate() {
  let y = document.forms["myForm"]["psw"].value;
  if (y == "") {
    alert("password must be filled out");
    return false;
 
  }
}

function email_validate() {
    var email_vali= /\S+@\S+\.\S+/;
    //Validate TextBox value against the Regex.
    var validation = email_vali.test(document.getElementById("email").value);
    if (!validation) {
    alert("Not an email address");
    return false;
    } 
    }

    // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction() {
  var dots=document.getElementById('dots');
  var moreText=document.getElementById('more');
  var btnText=document.getElementById('myBtn');
if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}




function validate() {

var d=a&&b&&c;
		if(d)
document.getElementById('btn-submit').disabled = false;
else{
    document.getElementById('btn-submit').disabled = true;
}
		
		
	}

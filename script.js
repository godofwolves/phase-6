
// "el" stands for the "element" that was just clicked
function addClass(el){
	el.classList.add("opaque");

}

// "el" stands for the "element" that was just clicked
function pass(el){	
	var input = document.getElementById('pass').value
}

// password: 
function check() {
  x = document.getElementById("myPwd").value;
  if (x !== "heart") {
    alert("Try a different path");
    return false;
  }else {
window.location = "https://www.google.com";
  }
}

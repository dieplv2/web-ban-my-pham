const icon = document.getElementById('icon');
const mobile = document.getElementById('mobile');


window.onclick = function(event) {
    if(event.target == mobile) {
        mobile.style.display='none';
    }
}

function myFunction() {
    var element = document.getElementById("mobile");
    element.classList.toggle("modal");
 }
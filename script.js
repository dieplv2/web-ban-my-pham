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

/*=======================================*/  
var margin = 0;
var itemDisplay = 0;
var slider = document.getElementsByClassName('products')[0];

if(screen.width > 990) {
    itemDisplay = document.getElementsByClassName('product')[0].getAttribute('item-display-d');
    margin = itemDisplay * 6.5;
}

if(screen.width > 700 && screen.width < 990) {
    itemDisplay = document.getElementsByClassName('product')[0].getAttribute('item-display-t');
    margin = itemDisplay * 8;
}

if(screen.width > 280 && screen.width < 700) {
    itemDisplay = document.getElementsByClassName('product')[0].getAttribute('item-display-m');
    margin = itemDisplay * 10;
}

var item = document.getElementsByClassName('cart');

var itemleft = item.length % itemDisplay;
var itemSlide = Math.floor(item.length / itemDisplay) -1;

for(let i = 0; i < item.length; i++) {
    item[i].style.width = (screen.width / itemDisplay) - margin  + "px";
}

for(let i = 0; i < item.length; i++) {
    item[i].onmousemove = function() {
        slider.style.left = -screen.width + "px";
    }
}
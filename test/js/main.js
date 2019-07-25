var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});
window.onscroll =function(){scrollFunction()};
function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("myTopnav").style.background = "#000";
        document.getElementById("myTopnav").style.transition = "1s";
       }
       else{
        document.getElementById("myTopnav").style.background = "transparent";
       }
    }

    window.addEventListener('load',()=>{
        const preload = document.querySelector('.preloader');
        preload.classList.add('preload-finish')
        
    })

    // var loader;
    // function loadNow(opacity) {
    //     if(opacity<=0){
    //         displayContent();
    //     }  
    //     else{
    //         loader.style.opacity=opacity;
    //         window.setTimeout(function() {

    //             loadNow(opacity - 0.05)
    //         }, 100);
    //     }
    // }

    // function displayContent(){
    //     loader.style.display = "none";
    //     document.getElementById('section01').style.display='block';

        
    // }

    // document.addEventListener("DOMContentLoaded",function(){
    //     loader =  document.getElementById('loader');
    //     loadNow(1);
    // })


var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },6000);
};

var classname = document.getElementsByClassName("button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}
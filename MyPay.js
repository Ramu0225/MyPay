window.onscroll = function() {scroll()}

function scroll(){
   if(window.pageYOffset > 400) 
   {
      document.getElementById("nav").classList.add("nav-bar-bg");
      document.getElementsByTagName("body")[0].classList.add("color-bg");
      document.getElementById("animation").classList.add("slide-up-fade-in");

   } else{
      document.getElementById("nav").classList.remove("nav-bar-bg");
      document.getElementsByTagName("body")[0].classList.remove("color-bg");
      document.getElementById("animation").classList.remove("slide-up-fade-in");


   } 
}
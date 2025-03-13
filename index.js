/*Jquery script for the navbar*/
$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY>20){
          $('.navbar').addClass("sticky");
       }else{
        $('.navbar').removeClass("sticky");
       } 
       if(this.scrollY>500){
         $('.scroll-up-btn').addClass("show");
       }else{
         $('.scroll-up-btn').removeClass("show");
       }
    });


    //slide up script
    $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop:0});
    });

    //toogle menu/navbar/script
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });
});

/*const body=document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle=document.querySelector(".dark-light");

//Js code to toggle dark and light mode
modeToggle.addEventListener("click",()=>{
   modeToggle.classList.toggle("active");
   body.classList.toggle("dark");
});*/

//typing animatio script
var typed=new Typed(".typing",{
   strings:["innovative developer","Innovative Developer","SWE Student","software Engineer"],
   typeSpeed:100,
   backSpeed:60,
   loop:true
  
});

var typed=new Typed(".typing-2",{
   strings:["innovative developer","Innovative Developer","SWE Student","software Engineer"],
   typeSpeed:100,
   backSpeed:60,
   loop:true
  
});
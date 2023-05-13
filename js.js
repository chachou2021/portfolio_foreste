/*const icon = document.querySelector(".icon")
const menu = document.querySelector("menu ul")

icon.addEventListener('click',() => {
  
    icon.classList.toggle("show");
    
    menu.classList.toggle("show");
    menu.classList.toggle("menu ul");
    
}); */

const icon = document.querySelector(".icon")
const icon2 = document.querySelector(".icon2")
const menu = document.querySelector(".menu ul")
const nav = document.querySelector("nav")

icon.addEventListener('click',() => {
   
    menu.style.transition = 'ease-in-out 0.9s' ;
    
        menu.style.display = 'none' ;
        icon.style.display = 'none' ;
        icon2.style.display = 'block' ;
   
  

   
});

icon2.addEventListener('click',() => {
   
    nav.style.transition = 'ease-in-out 0.9s' ;
   
    menu.style.display = 'block' ;
   
    icon.style.display = 'block' ;
    icon2.style.display = 'none' ;




});
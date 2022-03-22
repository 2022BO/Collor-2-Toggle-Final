

const Mybutton1= document.getElementById("mybutton1");
Mybutton1.addEventListener("click", function(){
  const body=document.querySelector("body");
  console.log (body)
  body.classList.toggle('lightblue-background');
});
const Mybutton2= document.getElementById("mybutton2");
Mybutton2.addEventListener("click", function(){
  const body=document.querySelector("body");
  console.log (body)
  body.classList.toggle('lightpink-background');
});
const Mybutton3= document.getElementById("mybutton3");
Mybutton3.addEventListener("click", function(){
  const body=document.querySelector("body");
  console.log (body)
  
  body.classList.toggle('lightseagreen-background');
});
const Mybutton4= document.getElementById("mybutton4");
Mybutton4.addEventListener("click", function(){
  const body=document.querySelector("body");
  console.log (body)
  
  body.classList.toggle('lightyellow-background');
});
const Mybutton5= document.getElementById("mybutton5");
Mybutton5.addEventListener("click", function(){
  const body=document.querySelector("body");
  console.log (body)
  
  body.classList.toggle('lightsalmon-background');
});
let toggleNavStatus = false;
let toggleNav = function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl= document.querySelector(".nav-sidebar ul");
    let getSidebarTitle= document.querySelector(".nav-sidebar span");
    let getSidebarLinks= document.querySelectorAll(".nav-sidebar ul button ");
    console.log (getSidebarTitle)
    
   if (toggleNavStatus === false) {
     getSidebarUl.style.visbilty = "visible";
     getSidebar.style.witdth = "272px";
     getSidebarTitle.style.opacity = "1";

    let arrayLength= getSidebarLinks.length;
    console.log (arrayLength);
    for (let i=0; i <arrayLength; i++){
      getSidebarLinks[i].style.opacity = "1"; 
    }
     toggleNavStatus = false;

  }else if (toggleNavStatus === true){
    getSidebar.style.width ="50px";
    getSidebarTitle.style.opacity ="0";
    let arrayLength= getSidebarLinks.length;

    for (let i=0; i< arrayLength; i++ ){
      getSidebarLinks[i].style.opacity ="0"; 
    
   }
   getSidebarUl.style.visibilty="hidden";
   toggleNavStatus = false; 
  }}


const MyBtnToggle= document.getElementById ("btn-toggle-nav")
MyBtnToggle.addEventListener("click", function () {
  toggleNav () 
})
/*function openNav() {
  document.getElementById("nav-sidebar").style.width = "250px";
  document.getElementById("Change-background").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("nav-sidebar").style.width = "0";
  document.getElementById("Change-background").style.marginLeft= "0";
}*/

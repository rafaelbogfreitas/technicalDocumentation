 let sideBar = document.querySelector('#navbar');
 let mainContent = document.getElementById('main-doc');
 let b = document.querySelector('body');
 let mainHeader = document.querySelector('.main-header');
 let nav = document.querySelector('nav');

 //icons
 let leftIcon = document.querySelector('#leftColumnIcon');
 let rightIcon = document.querySelector('#rightColumnIcon');
 let noColumnIcon = document.querySelector('#noColumnIcon');

 leftIcon.addEventListener('click',navLeft , false);
 rightIcon.addEventListener('click',navRight , false);
 noColumnIcon.addEventListener('click', hideSideBar, false);
 window.addEventListener('scroll', fixSideBar, false);

 //gives a top-margin to the nav's header which is equal to the page offset, crating the ilusion that the nav is fixed.
 function fixSideBar(){
   mainHeader.style.marginTop = window.pageYOffset + "px";
 }

//Hides or includes nav on the screen and remove/add scroll for changing the top-margin on the header
 function hideSideBar(){
   if(nav.classList.contains('hideSideBar')){
     nav.classList.remove('hideSideBar');
     mainContent.style.flex = '0 1 calc(82%)';
     window.addEventListener('scroll', fixSideBar, false);
   }else {
     nav.classList.add('hideSideBar');
     mainContent.style.flex = '0 1 calc(100%)';
     mainContent.style.transition = 'all 0.3s ease-in 0.3s';
     window.removeEventListener('scroll', fixSideBar, false);
   }
 }

//toggles the nav between right and left side of the screen
 function navRight(){
   if(b.style.flexDirection = "row") b.style.flexDirection = "row-reverse";
   if(nav.classList.contains('hideSideBar')){
     nav.classList.remove('hideSideBar');
     mainContent.style.flex = '0 1 calc(82%)';
     window.addEventListener('scroll', fixSideBar, false);
   }
 }

 function navLeft(){
   if(b.style.flexDirection = "row-reverse") b.style.flexDirection = "row";
   if(nav.classList.contains('hideSideBar')){
     nav.classList.remove('hideSideBar');
     mainContent.style.flex = '0 1 calc(82%)';
     window.addEventListener('scroll', fixSideBar, false);
    }

 }

//Show Menu
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');


//Menu Show
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
   });
}


//Menu Hidden
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
   });
}


//Remove Menu Mobile
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
   const navMenu = document.getElementById('nav-menu');

   navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));



/*change background header*/
function scrollHeader() {
   const header = document.getElementById('header');
   //when the scroll is greater than 50 viewport height, add the scroll-header class to header tag
   if (this.scrollY >=80) header.classList.add('scroll-header');
   else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*Show Scrollup*/
function scrollUp() {
   const scrollUp = document.getElementById('scroll-up');
   //when the scroll is greater than 350 viewport height, add the show-scroll class to scroll-top class
   if (this.scrollY >=350) scrollUp.classList.add('show-scroll');
   else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);





/*About Tabs*/

const tabs = document.querySelectorAll('[data-target]');
const tabContents= document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
   tab.addEventListener('click', () => {
   const target  = document.querySelector(tab.dataset.target);
   
     tabContents.forEach((tabContent) => {
     tabContent.classList.remove('tab-active');
     });

     target.classList.add('tab-active');

     tabs.forEach((tab) => {
        tab.classList.remove('tab-active');
     });

     tab.classList.add('tab-active');
   });
});

/*Contact Form*/
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
   e.preventDefault();

   //check if the field has a value
   if (
      contactName.value === '' || 
      contactEmail.value ==='' || 
      contactSubject.value === '' || 
      contactMessage.value === ''
   ) {
     //show message
     errorMessage.textContent = "Write all the input fields" 
   }

   else{
      //serviceID - templateID - #form - publickey
      emailjs
      .sendForm(
         'service_96en384',
         'template_9ry45mb',
         '#contact-form',
         'ZgvYoOJRnRWKWYs4T',
      )
      .then(
         () => {
         //show message and add color, window + dot to open emoji
         errorMessage.classList.add('color-first');
         errorMessage.textContent = 'Message sent ✔️';

         //remove message after 5 seconds
         setTimeout(() => {
            errorMessage.textContent ='';
         }, 5000);
      }, (error) => {
        alert('OOPs! SOMETHING WENT WRONG...', error); 
      }
   );

   //clear input fields
   contactName.value ='';
   contactEmail.value ='';
   contactSubject.value ='';
   contactMessage.value ='';
   }
};

contactForm.addEventListener('submit', sendEmail);




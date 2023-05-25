// JavaScript Document
//window.alert(window.innerHeight+','+window.innerWidth)
// animation progress par
let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop-400) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

//animate on scroll
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  
 /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }
//safty

	  document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
      });

     document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && (event.keyCode === 67 || event.keyCode === 86 || event.keyCode === 85 || event.keyCode === 117)) {
        event.preventDefault();
         }
     });

    document.addEventListener("keydown", function (event) {
      if(event.keyCode === 123) {
         event.preventDefault();
      }
     });
	  
	 document.addEventListener("keydown", function(event){
		 if(event.shiftKey && (event.ctrlKey && (event.keyCode === 67 || event.keyCode === 73 || event.keyCode === 74))){
		 
	 event.preventDefault();
         }
     });
	  
	  
document.addEventListener("mousedown", function(event) {
      if (event.button === 2 || event.ctrlKey) {
        event.preventDefault();
      }
    });

    document.addEventListener("keydown", function(event) {
      if (event.ctrlKey && (event.keyCode === 44 || event.keyCode === 45)) {
        event.preventDefault();
      }
    });


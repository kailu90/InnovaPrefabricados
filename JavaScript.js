//-----------------------Función animación SLIDER--------------------//

let slider = document.querySelector(".slider_container_elements");

let index = 1;

let numImages = 4;

setInterval(function () {
    let percentage = index * -100;
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(" + percentage + "%)";
    index++;   
    if (index >= numImages) {
        index = 0; 
    }  
},10000);





//-----------------------Función flecha ATRÁS SLIDER--------------------//


let arrowBack = document.querySelector(".arrow_back")
let arrowNext = document.querySelector(".arrow_next")

arrowBack.addEventListener("click" , function() {
    console.log("click flecha atrás");
    let percentage = index * 100;
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(" + percentage + "%)";
    index++;
    if (index = 0) {
        index = 1;
        let percentage = index * 300;
        slider.style.transition = "transform 1s ease";
        slider.style.transform = "translateX(" + percentage + "%)";  
    }  
});





//-----------------------Función flecha SIGUIENTE SLIDER--------------------//


arrowNext.addEventListener("click" , function() {
    console.log("click flecha siguiente");
    let percentage = index * 100;
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(" + percentage + "%)";
    index++;
    if (index = 0) {
        index = 1;
        let percentage = index * 300;
        slider.style.transition = "transform 1s ease";
        slider.style.transform = "translateX(" + percentage + "%)";  
    }  
});


//-----------------------Función botón NAVEGACION SLIDER--------------------//
 

let navSlider1 = document.querySelector(".nav_slider1");
let navSlider2 = document.querySelector(".nav_slider2");
let navSlider3 = document.querySelector(".nav_slider3");
let navSlider4 = document.querySelector(".nav_slider4");

navSlider1.addEventListener("click" , function() {
    console.log("click navSlider 1");
  
});

navSlider2.addEventListener("click" , function() {
    console.log("click navSlider 2");
  
});

navSlider3.addEventListener("click" , function() {
    console.log("click navSlider 3");
  
});

navSlider4.addEventListener("click" , function() {
    console.log("click navSlider 4");
  
});


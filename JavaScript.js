let slider = document.querySelector(".slider_container_elements");

let index = 0;

let numImages = 4;

let percentage = 0;


//-----------------------Función flecha ATRÁS SLIDER--------------------//


let arrowBack = document.querySelector(".arrow_back")
let arrowNext = document.querySelector(".arrow_next")

arrowBack.addEventListener("click" , function() {
    if (percentage === 0) {
        console.log("prueba if");
        percentage -= 300;    
        slider.style.transition = "transform 1s ease";
        slider.style.transform = "translateX(" + percentage + "%)";
        console.log(percentage);  
    }
    else {
        console.log("click flecha atrás");
        percentage += 100;    
        slider.style.transition = "transform 1s ease";
        slider.style.transform = "translateX(" + percentage + "%)";
        console.log(percentage);   
    }
});



//-----------------------Función flecha SIGUIENTE SLIDER--------------------//


arrowNext.addEventListener("click" , function() {
    if (percentage === -300) {
        console.log("prueba if next");
        percentage += 300;    
        slider.style.transition = "transform 1s ease";
        slider.style.transform = "translateX(" + percentage + "%)";
        console.log(percentage);  
    }

    else {
        console.log("click flecha siguiente");
        percentage -= 100;    
        slider.style.transition = "transform 1s ease";
        slider.style.transform = "translateX(" + percentage + "%)";
        console.log(percentage);   
    } 
    
});

//-----------------------Función animación SLIDER--------------------//

setInterval(function () {   
    let percentage = index * -100;
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(" + percentage + "%)";
    index++; 
    if (index >= numImages) {
        index = 0; 
    }  
},10000);






//-----------------------Función botón NAVEGACION SLIDER--------------------//
 

let navSlider1 = document.querySelector(".nav_slider1");
let navSlider2 = document.querySelector(".nav_slider2");
let navSlider3 = document.querySelector(".nav_slider3");
let navSlider4 = document.querySelector(".nav_slider4");

navSlider1.addEventListener("click" , function() {
    console.log("click navSlider 1");
    let percentage = 0;
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(" + percentage + "%)";  
});

navSlider2.addEventListener("click" , function() {
    console.log("click navSlider 2");
    let percentage = -100;
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(" + percentage + "%)";  
  
});

navSlider3.addEventListener("click" , function() {
    console.log("click navSlider 3");
    let percentage = -200;
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(" + percentage + "%)";  
});

navSlider4.addEventListener("click" , function() {
    console.log("click navSlider 4");
    let percentage = -300;
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(" + percentage + "%)";  
});


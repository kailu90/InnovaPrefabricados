//-----------------------Función animación SLIDER--------------------//

let slider = document.querySelector(".slider_container_elements");

let index = 1;

let numImages = 4;

setInterval(function () {
    let percentage = index * -100;
    slider.style.transform = "translateX(" + percentage + "%)";
    index++;   
    if (index >= numImages) {
        index = 0; 
    }  
},5000);



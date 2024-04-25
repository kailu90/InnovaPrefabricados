let slider = document.querySelector(".slider_container_elements");

let index = 0;

let numImages = 4;

let percentage = 0;





//-----------------------Función Actualizar Slider--------------------//

//Mueve el slider según la variable percentage

function actualizarSlider() {
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(" + percentage + "%)";     
}





//-----------------------Función flecha ATRÁS SLIDER--------------------//

//Cuando se realiza click en flecha a la izquierda trae el slider de la izquierda
//Primero valida si es el primero, para traer el último slider

let arrowBack = document.querySelector(".arrow_back")
let arrowNext = document.querySelector(".arrow_next")

arrowBack.addEventListener("click" , function() {
    if (percentage === 0) {       
        percentage -= 300;    
        actualizarSlider();    
    }
    else {
        console.log("click flecha atrás");
        percentage += 100;    
        actualizarSlider();         
    }
});





//-----------------------Función flecha SIGUIENTE SLIDER--------------------//

//Cuando se realiza click en flecha a la derecha trae el slider de la derecha
//Primero valida si es el último, para traer el primer slider

arrowNext.addEventListener("click" , function() {
    if (percentage === -300) {      
        percentage += 300;    
        actualizarSlider();        
    }
    else {      
        percentage -= 100;    
        actualizarSlider();       
    }     
});

//-----------------------Función animación SLIDER--------------------//

//con setInterval la función se ejecuta por intervalos definidos 
//En este caso cada 10 segundos el slider va pasando

/*setInterval(function () {   
    percentage = index * -100;
    actualizarSlider();   
    index++; 
    if (index >= numImages) {
        index = 0; 
    }  
},6000);*/






//-----------------------Función botón NAVEGACION SLIDER--------------------//

//Cuando se da click a un nav slider, se muestra el slider 

let navSlider1 = document.querySelector(".nav_slider1");
let navSlider2 = document.querySelector(".nav_slider2");
let navSlider3 = document.querySelector(".nav_slider3");
let navSlider4 = document.querySelector(".nav_slider4");

navSlider1.addEventListener("click" , function() {
    console.log("click navSlider 1");
    percentage = 0;
    actualizarSlider();   
});

navSlider2.addEventListener("click" , function() {
    console.log("click navSlider 2");
    percentage = -100;
    actualizarSlider();   
});

navSlider3.addEventListener("click" , function() {
    console.log("click navSlider 3");
    percentage = -200;
    actualizarSlider();    
});

navSlider4.addEventListener("click" , function() {
    console.log("click navSlider 4");
    percentage = -300;
    actualizarSlider();    
});





//-----------------------Función botón NAVEGACION SLIDER--------------------//
//Cuando se da click a un nav slider, se remueven las marcas de los nav_sliders
//y se marca el slider que está activo.

let navSliders = document.querySelectorAll('.nav_slider');

navSliders.forEach(function(navSlider) {
    navSlider.addEventListener('click', function() {      
        navSliders.forEach(function(nav) {
            nav.classList.remove('activo');
        });       
        navSlider.classList.add('activo');
    });
});
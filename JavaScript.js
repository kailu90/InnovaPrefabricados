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


//-----------------------Función Pintar Slider--------------------//

//Borra nav slider anterior y pinta el activo

function pintarNavSlider() {
if (index === 0) {
    console.log("slider1")  
    navSlider1.style.backgroundColor = "black";   
    navSlider2.style.backgroundColor = "#fff";   
    navSlider3.style.backgroundColor = "#fff";    
    navSlider4.style.backgroundColor = "#fff"; 
} else if (index === 1) {
    console.log("slider2")       
    navSlider2.style.backgroundColor = "black"; 
    navSlider1.style.backgroundColor = "#fff";   
    navSlider3.style.backgroundColor = "#fff";    
    navSlider4.style.backgroundColor = "#fff"; 
} else if (index === 2) {
    console.log("slider3")       
    navSlider3.style.backgroundColor = "black"; 
    navSlider1.style.backgroundColor = "#fff";   
    navSlider2.style.backgroundColor = "#fff";    
    navSlider4.style.backgroundColor = "#fff"; 
} else if (index === 3) {
    console.log("slider4")       
    navSlider4.style.backgroundColor = "black";
    navSlider1.style.backgroundColor = "#fff";   
    navSlider2.style.backgroundColor = "#fff";    
    navSlider3.style.backgroundColor = "#fff"; 
} 
}




//-----------------------Función flecha ATRÁS SLIDER--------------------//

//Cuando se realiza click en flecha a la izquierda trae el slider de la izquierda
//Primero valida si es el primero, para traer el último slider

let arrowBack = document.querySelector(".arrow_back")
let arrowNext = document.querySelector(".arrow_next")

arrowBack.addEventListener("click" , function() { 
    if (index === 0) {                
        index = numImages - 1;
    } else {
        index--;
    }
    percentage = index * -100;    
    actualizarSlider(); 
    pintarNavSlider();
});





//-----------------------Función flecha SIGUIENTE SLIDER--------------------//

//Cuando se realiza click en flecha a la derecha trae el slider de la derecha
//Primero valida si es el último, para traer el primer slider

arrowNext.addEventListener("click" , function() {     
    if (index === numImages - 1) {        
        index = 0;
    } else {
        index++;
    }
    percentage = index * -100;    
    actualizarSlider();
    pintarNavSlider(); 
});






//-----------------------Función animación SLIDER--------------------//

//con setInterval la función se ejecuta por intervalos definidos 
//En este caso cada 10 segundos el slider va pasando

setInterval(function () { 
    pintarNavSlider();      
    percentage = index * -100;
    actualizarSlider();  
    index++; 
    if (index >= numImages) {
        index = 0; 
    }     
},6000);







//-----------------------Función botón NAVEGACION SLIDER--------------------//

//Cuando se da click a un nav slider, se muestra el slider 

let navSlider = document.querySelector(".nav_slider");
let navSlider1 = document.querySelector(".nav_slider1");
let navSlider2 = document.querySelector(".nav_slider2");
let navSlider3 = document.querySelector(".nav_slider3");
let navSlider4 = document.querySelector(".nav_slider4");

navSlider1.addEventListener("click" , function() {
    navSlider1.style.backgroundColor = "black"; 
    navSlider2.style.backgroundColor = "#fff";   
    navSlider3.style.backgroundColor = "#fff";    
    navSlider4.style.backgroundColor = "#fff";    
    percentage = 0;
    actualizarSlider();
});

navSlider2.addEventListener("click" , function() {
    navSlider2.style.backgroundColor = "black"; 
    navSlider1.style.backgroundColor = "#fff";   
    navSlider3.style.backgroundColor = "#fff";    
    navSlider4.style.backgroundColor = "#fff";      
    percentage = -100;
    actualizarSlider();      
});

navSlider3.addEventListener("click" , function() {
    navSlider3.style.backgroundColor = "black"; 
    navSlider1.style.backgroundColor = "#fff";   
    navSlider2.style.backgroundColor = "#fff";    
    navSlider4.style.backgroundColor = "#fff";    
    percentage = -200;
    actualizarSlider();    
});

navSlider4.addEventListener("click" , function() {
    navSlider4.style.backgroundColor = "black"; 
    navSlider1.style.backgroundColor = "#fff";   
    navSlider2.style.backgroundColor = "#fff";    
    navSlider3.style.backgroundColor = "#fff";    
    percentage = -300;
    actualizarSlider();   
});



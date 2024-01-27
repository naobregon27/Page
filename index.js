const menuBtn = document.querySelectorAll(".menu-btn");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li")

menuBtn.forEach(btn => {
    btn.addEventListener("click", sideNavToggle);
})

function sideNavToggle() {

    let delay = 100;

    //
    menu.classList.toggle("menu-open");

    setTimeout(() => {
        resetAnimations();
    }, delay );


    //
    links.forEach(link => {
        link.style.opacity = "0";
        //animacion
        link.style.animation = "slideIn 400ms ease-in-out formwards";

        link.style.animationDelay = delay + "ms"


        delay += 100;
    })


    function resetAnimations() {
        links.forEach(link => {
            link.style.animation = "none";

            link.style.opacity = "1"
        })
    }
}

//slider

const cntrl = document.querySelectorAll(".slider-cntrl");
const cntrlMob = document.querySelectorAll(".pagination-mobile > li");
const title = document.querySelector(".title");
const subTitle = document.querySelectorAll(".sub-title");
const parra = document.querySelectorAll(".parra");
const img = document.querySelector(".thumbnail");
const count = document.querySelector(".slider-count");
const progress = document.querySelector(".progress div");

let id = 0

//data
//arreglos con imagenes para cambiar
const images = [
    "./imagenes/2.jpg",
    "./imagenes/8.jpg",
    "./imagenes/9.jpg",
];

//progreso
const progressWidth = [
    "33%",
    "66%",
    "100%"
];

//variasion por texto
const text = [
    "¿QUÉ ES LUDÓPATA INACTIVO?",
    "¿QUIÉN ESTÁ DETRÁS DE ESTA?",
    "POR ELLO, TE DEJAMOS UN REGALO",
];

//parrafo
const parrafo = [
"Es una comunidad que ayuda a las personas a prevenir la adicción de los juegos de azar, incluso a liberarse de esta. Además, hay hábitos saludables  que te ayudarán a tener una vida mucho más estabilizada y controlada.",
"Pues nada más y nada menos que Marcos Agudo.",
"Después de rellenar este formulario tendrás acceso a un regalo que puede serte de muchísima utilidad si estás pasando por una situación difícil.",
]

//control de paginacion
for (let i = 0; i < cntrl.length; i++) {
    //click para el evento del paginacion
    cntrl[i].addEventListener("click", () => {
        //funcionamiento del slider
        slider(i);
        //setea la paginacion
        id = i;
        //stop auto Slide
        stopAutoSlide();
    });
    //guardar el clik del evento para el paginacion sobre mobil
    cntrlMob[i].addEventListener("click", () => {
        //corriendo la funcion del slider
        slider(i);
        //set 
        id = i;
        //auto slider
        stopAutoSlide();
    })
}

function slider(i) {
    //control de imagenes
    img.src = images[i]
    //progresion 
    progress.style.width = progressWidth[i];
    //title
    title.innerText = text[i] ;
    //subtitle
    subTitle.forEach(sub => {
        sub.innerText = text[i]
    });
    //parrafo
    parra.forEach (par => {
        par.innerText = parrafo [i]
    })



    //change slider numero
    count.innerText = "/0" + (i + 1);

    //remover todas las actividades
    for (let i = 0; i < cntrl.length; i++) {
        cntrl[i].classList.remove("active");
        cntrlMob[i].classList.remove("pag-active");
    }
    //reseteo
    cntrl[i].classList.add("active");
    cntrlMob[i].classList.add("pag-activE");
}

//slider automatizacion
function nextSlide(){
    //auto incremental
    id++;
    //condicional de chequeo

    if (id > cntrl.length - 1){
        id = 0;
    }
    slider(id)
}

let autoSlide = setInterval(nextSlide, 7000);

function stopAutoSlide () {
    clearInterval(autoSlide);

    autoSlide = setInterval(nextSlide, 7000)
}




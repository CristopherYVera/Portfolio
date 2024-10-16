const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu');
const menuButtonSpans = document.querySelectorAll('#menu-button span'); 
const links = document.querySelectorAll("#menu a");

//funcion para abrir y cerrar el menu
menuButton.addEventListener('click',() => {
    menuItems.classList.toggle('hidden');

    menuButtonSpans.forEach((span)=>{
        span.classList.toggle('animado');
    })
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        menuItems.classList.add('hidden');
        menuButtonSpans.forEach((span)=>{
            span.classList.remove('animado');
        });
    });
});

//cierra menu
window.onresize = function(){
    let w = window.outerWidth;
    if (w > 768){
        menuItems.classList.add('hidden');
        menuButtonSpans.forEach((span)=>{
            span.classList.remove('animado');
        });
    }
}

//dark mode
const darkButton = document.querySelector('#darkButton');
const icon = document.querySelector('#icon');

darkButton.addEventListener('click', function() {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
            icon.classList.replace('hover:text-sky-600', 'hover:text-yellow-500');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
            icon.classList.replace('hover:text-yellow-500', 'hover:text-sky-600');
        }
    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
            icon.classList.replace('hover:text-yellow-500', 'hover:text-sky-600');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
            icon.classList.replace('hover:text-sky-600', 'hover:text-yellow-500');
        }
    }
});

// variables jobs 

const jobSection = document.querySelector('#jobSection');
const articles = document.querySelectorAll('#jobSection article');

jobSection.addEventListener('click',(event)=>{
    const id = event.target.dataset.id;

    if(id){
        articles.forEach((article)=>{
            article.classList.add('hidden');
        });
        const element = document.getElementById(id);
        element.classList.remove('hidden');
    }
});

const jobLinks = document.querySelectorAll('#jobSection button');
const firstLink = document.querySelector('#link1');

jobLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        firstLink.classList.remove(
            'border-sky-500',
            'bg-white',
            'dark:bg-slate-700');
    });
});

//desplazar
document.addEventListener('DOMContentLoaded', () => {
    const sobreMi = document.querySelector('#linkSobreMi');
    const experiencia = document.querySelector('#linkExperiencia');
    const proyectos = document.querySelector('#linProyectos');
/*     const contactame = document.querySelector('#linkContactame'); */

    sobreMi.addEventListener('click', () => {
        document.querySelector('#sobreMi').scrollIntoView({ behavior: 'smooth' });
    });

    experiencia.addEventListener('click', () => {
        document.querySelector('#irExperiencia').scrollIntoView({ behavior: 'smooth' });
    });

    proyectos.addEventListener('click', () => {
        document.querySelector('#irProyectos').scrollIntoView({ behavior: 'smooth' });
    });

/*     contactame.addEventListener('click', () => {
        document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
    }); */
});

//navegacion fija
document.addEventListener('DOMContentLoaded', () => {
    // Función para navegación fija
    function navegacionFija() {
        const barra = document.querySelector('header');
        const body = document.querySelector('body');

        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                barra.classList.add('fixed-header');
                body.classList.add('body-scroll');
            } else {
                barra.classList.remove('fixed-header');
                body.classList.remove('body-scroll');
            }
        });
    }

    // Función para desplazamiento suave
    function scrollNav() {
        const enlaces = document.querySelectorAll('nav ul li a');
        enlaces.forEach((enlace) => {
            enlace.addEventListener('click', function(e) {
                e.preventDefault();

                const seccionScroll = e.target.getAttribute('href');
                const seccion = document.querySelector(seccionScroll);
                seccion.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    navegacionFija();
    scrollNav();
});
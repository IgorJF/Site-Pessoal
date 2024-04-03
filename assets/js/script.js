window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.topo').style.display = "block";
    } else {
        document.querySelector('.topo').style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const carouselProjetos = document.querySelector('.projetos .carousel');
const carouselArtigos = document.querySelector('.artigos .carousel');
const cardsProjetos = document.querySelectorAll('.projetos .card');
const cardsArtigos = document.querySelectorAll('.artigos .card');
const cardWidth = cardsProjetos[0].offsetWidth + parseInt(window.getComputedStyle(cardsProjetos[0]).marginRight);

let currentPositionProjetos = 0;
let currentPositionArtigos = 0;

function moveCarouselProjetos(direction) {
    const newPosition = currentPositionProjetos + direction * cardWidth;
    if (newPosition <= 0 && newPosition >= -(cardsProjetos.length - 1) * cardWidth) {
        carouselProjetos.style.transform = `translateX(${newPosition}px)`;
        currentPositionProjetos = newPosition;
    }
}

function moveCarouselArtigos(direction) {
    const newPosition = currentPositionArtigos + direction * cardWidth;
    if (newPosition <= 0 && newPosition >= -(cardsArtigos.length - 1) * cardWidth) {
        carouselArtigos.style.transform = `translateX(${newPosition}px)`;
        currentPositionArtigos = newPosition;
    }
}

document.querySelector('.projetos .next').addEventListener('click', () => moveCarouselProjetos(-1));
document.querySelector('.projetos .prev').addEventListener('click', () => moveCarouselProjetos(1));
document.querySelector('.artigos .next').addEventListener('click', () => moveCarouselArtigos(-1));
document.querySelector('.artigos .prev').addEventListener('click', () => moveCarouselArtigos(1));

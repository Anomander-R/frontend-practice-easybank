console.log('Script is working');

const btnHamburger = document.getElementById('btnHamburger');
const header = document.getElementById('header');
const overlay = document.getElementById('overlay');


function onClick(){
    overlay.classList.add("fade-out");
    header.classList.toggle("open");
}

btnHamburger.addEventListener('click', onClick);

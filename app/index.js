console.log('Script is working');

const btnHamburger = document.getElementById('btnHamburger');
const header = document.getElementById('header');
const overlay = document.getElementById('overlay');
const body = document.body;
let flip = true;

function onClick(){
    // flip=!flip;
    // if (flip){
    //     body.classList.add("noscroll")
    // }
    overlay.classList.add("fade-out");
    header.classList.toggle("open");
    body.classList.toggle("noscroll");
}

btnHamburger.addEventListener('click', onClick);

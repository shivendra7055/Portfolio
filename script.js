
// ======scroll sections active link======
let menuIcons = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');
// console.log(navbar);


menuIcons.addEventListener("click", () => {
    menuIcons.classList.toggle('fa-xmark');
    navbar.classList.toggle('showNav');
});



// ======scroll sections active link======

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {

    // ======sticky navbar======
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // document.getElementById('darkMode').style.color='black'

    menuIcons.classList.remove('fa-xmark');
    navbar.classList.remove('showNav');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });



};


// ======dark light mode======


function changeColor() {
    var color = document.getElementById('darkMode').style.color;
   
    var rootColor = document.documentElement.style;
    var symbol = document.getElementById('symbol');
    event.preventDefault();

    switch (color) {

        case 'black':
            rootColor.setProperty('--bg-color', 'black');
            rootColor.setProperty('--text-color', 'white');
            rootColor.setProperty('--main-color', 'yellowgreen');
            rootColor.setProperty('--shadow-color', 'rgba(248, 246, 246, 0.2)')

            document.getElementById('image').src = './photo-dark.png'
            document.getElementById('a-image').src = './photo-dark.png'

            symbol.classList.remove('fa-moon')
            symbol.classList.add('fa-sun')

            document.getElementById('darkMode').style.color = 'white';
            break;

        case 'white':
            rootColor.setProperty('--bg-color', 'white');
            rootColor.setProperty('--text-color', 'black');
            rootColor.setProperty('--main-color', 'rgb(7, 11, 248)');
            rootColor.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.2)')

            document.getElementById('image').src = './photo.png'
            document.getElementById('a-image').src = './photo.png'

            symbol.classList.remove('fa-sun')
            symbol.classList.add('fa-moon')

            document.getElementById('darkMode').style.color = 'black';
            break;

        default:
            'invalid'

    }
}



// ======Scrool Revel======

ScrollReveal({
reset: true,
distance: '80px',
duration:2000,
delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal({
reset: true ,
distance: '80px',
duration: 2000,
delay: 200,
});
 
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .service-box, .input-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.about-content,.home-content p', { origin: 'right' });
const socials_btn = document.querySelector('#socials-btn');
const socials = document.querySelector('#socials');
const social_close_btn = document.querySelector('#socials > .card > .title > i');
const bg = document.querySelector('#socials > .bg');
let is_hidden = true;

function show_socials() {
    socials.classList.remove('hide');
    socials.classList.add('show');
    is_hidden = false;
}

function hide_socials() {
    socials.classList.remove('show');
    socials.classList.add('pre-hide');

    setTimeout(() => {
        socials.classList.remove('pre-hide');
        socials.classList.add('hide');
    }, 300);
    is_hidden = true;
}

socials_btn.addEventListener('click', () => {
    if (is_hidden) {
        return show_socials();
    }

    hide_socials();
});

social_close_btn.addEventListener('click', () => {
    hide_socials();
});

bg.addEventListener('click', () => {
    hide_socials();
});
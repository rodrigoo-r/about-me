import setup_modal from "./util/modal.js";

const socials_btn = document.querySelector('#socials-btn');
const social_close_btn = document.querySelector('#socials > .card > .title > i');
let is_hidden = true;

const {show: show_socials, hide: hide_socials} = setup_modal('socials', true);

socials_btn.addEventListener('click', () => {
    if (is_hidden) {
        return show_socials();
    }

    hide_socials();
});

social_close_btn.addEventListener('click', () => {
    hide_socials();
});
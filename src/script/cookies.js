import setup_modal from "./util/modal.js";

const {show, hide} = setup_modal('cookies', true);

if (localStorage.getItem("cookies_accepted") === null) {
    show();
}

document.querySelector('#accept_cookies').addEventListener('click', () => {
    localStorage.setItem("cookies_accepted", "true");
    hide();
});

document.querySelector('#decline_cookies').addEventListener('click', () => {
    localStorage.setItem("cookies_accepted", "false");
    hide();
});

if (localStorage.getItem("cookies_accepted") === "true") {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-DLLJB53B89');
}
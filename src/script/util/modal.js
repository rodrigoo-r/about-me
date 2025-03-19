export default function setup_modal(id, allow_bg_click = true) {
    const modal = document.getElementById(id);
    if (modal == null) throw new Error(`Modal with id ${id} not found`);

    let is_hidden = true;
    const bg = modal.querySelector('.bg');
    if (bg == null) throw new Error(`Modal with id ${id} does not have a background element`);

    const obj = {
        show() {
            modal.classList.remove('hide');
            modal.classList.add('show');
            is_hidden = false;
        },

        hide() {
            modal.classList.remove('show');
            modal.classList.add('pre-hide');

            setTimeout(() => {
                modal.classList.remove('pre-hide');
                modal.classList.add('hide');
            }, 300);
            is_hidden = true;
        }
    };

    if (allow_bg_click) {
        bg.addEventListener('click', () => {
            obj.hide();
        });
    }

    return obj;
}
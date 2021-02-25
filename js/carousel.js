window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('.carousel-toggle .button');
    const carousel = document.querySelector('.carousel');
    const currentIndex = "active-0";

    function panCarousel (e) {
        const index = + e.target.dataset.index;
        if (index !== currentIndex) {
            /*buttons.forEach(function (button) {
                if (button.classList.contains('selected')) {
                    button.classList.remove("selected");
                }
            });*/
            for(let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                if (button.classList.contains('selected')) {
                    button.classList.remove("selected");
                }
            }
            e.target.classList.add('selected');
            carousel.className = "carousel";
            carousel.classList.add("active-" + index);
        }
    }

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', panCarousel);
    }
});

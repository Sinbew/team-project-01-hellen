function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll' , () => {
        if ($(this).scrollTop() >= 40) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click' , (e) => {
        e.preventDeFault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();
document.addEventListener("DOMContentLoaded", function () {
    let join_button, contact_background, contact_container, contact_close

    join_button = document.getElementsByClassName("banner-contact-button")[0]
    contact_background = document.getElementsByClassName("contact-background")[0]
    contact_container = document.getElementsByClassName("contact-container")[0]
    contact_close = document.querySelector('.contact>.close');
    contact_submit = document.querySelector('.contact>.contact-submit>input')


    join_button.addEventListener("click", function () {
        contact_background.style.display = "block"
        contact_container.style.display = "block"
    })

    contact_close.addEventListener("click", function () {
        contact_background.style.display = "none"
        contact_container.style.display = "none"
    })

    contact_submit.addEventListener("click", function () {
        contact_background.style.display = "none"
        contact_container.style.display = "none"
    })
});






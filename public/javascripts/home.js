document.addEventListener("DOMContentLoaded", function () {
    let join_button, contact_background, contact_container, contact_close

    join_button = document.getElementsByClassName("banner-contact-button")[0]
    contact_background = document.getElementsByClassName("contact-background")[0]
    contact_container = document.getElementsByClassName("contact-container")[0]
    contact_close = document.querySelector('.contact>.close');
    contact_submit = document.querySelector('.contact>.contact-submit>input');
    contact_form = document.querySelector('#contact-form');


    join_button.addEventListener("click", function () {
        contact_background.style.display = "block"
        contact_container.style.display = "block"
    })

    contact_close.addEventListener("click", function () {
        contact_background.style.display = "none"
        contact_container.style.display = "none"
    })


    $(document).ready(function () {

        $('#contact-form').submit(function (event) {
            contact_background.style.display = "none"
            contact_container.style.display = "none"
            // Ngăn chặn việc tải lại trang khi submit form
            event.preventDefault();



            // Gửi AJAX yêu cầu đến server
            $.ajax({
                url: '/',
                type: 'POST',
                data: $(this).serialize(), // Gửi dữ liệu từ form
                success: function (response) {
                    alert(response.message)
                },
                error: function (error) {
                    alert(err);
                }
            });
        });
    });

});






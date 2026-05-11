document.addEventListener("DOMContentLoaded", function(){

    const bookingForm =
    document.querySelector(".booking-form");

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        const fullName =
        bookingForm.querySelector('input[type="text"]').value;

        const email =
        bookingForm.querySelector('input[type="email"]').value;

        const phone =
        bookingForm.querySelector('input[type="tel"]').value;

        const service =
        bookingForm.querySelector("select").value;

        const date =
        bookingForm.querySelector('input[type="date"]').value;

        const details =
        bookingForm.querySelector("textarea").value;

        const whatsappNumber = "2348069148669";

        const message =
`Hello Clean Pass,

New Booking Request

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Service: ${service}
Date: ${date}

Details:
${details}`;

        const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.location.href = whatsappURL;

    });

});
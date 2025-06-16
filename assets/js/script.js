const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


$(document).ready(function() { 
    const photo = $(".marca"); 
    $(photo).on("mouseover", function() {
       $(this).addClass("hoverimg"); 
    }).on("mouseleave", function() {
       $(this).removeClass("hoverimg"); 
    }); 
});

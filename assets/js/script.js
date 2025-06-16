const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Para colapsar el navbar (en versión móvil) al hacer click en un link
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
          var collapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
          collapse.hide();
        }
      });
    });
  });

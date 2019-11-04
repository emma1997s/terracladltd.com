new WOW().init();


// Lightbox Init
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//navigation///
const toggler = document.querySelector('.navbar > .toggler'),
  navListContainer = document.querySelector('.navbar > .nav-list-container');

/*when toggler button is clicked*/
toggler.addEventListener(
  "click",
  () => {
    //convert hamburger to close
    toggler.classList.toggle('cross');
    //make nav visible
    navListContainer.classList.toggle('nav-active');
  },
  true
);

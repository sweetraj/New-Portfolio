var mixer = mixitup('.grid-portfolio-container');

new WOW().init();


// $(function() {
//    $.scrollify({
//      section : ".scrollify",
//      setHeights: false,
//      scrollSpeed: 1000,
//      updateHash: false,
//    });
//  }); 

  function openMenu() {
    document.getElementById('navbar').style.height = "100vh";
  }
  function closeMenu() {
    document.getElementById('navbar').style.height = "0vh";
  }
// scroll Behavior menu item ee click korle jate smoothly scroll kore tai eta use kora hoyeche..

  $(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 5000);
      return false;
    });
  });
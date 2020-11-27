$('[data-toggle="slide-collapse"]').on('click', function() {
  $navMenuCont = $($(this).data('target'));
  $navMenuCont.animate({
    'width': 'toggle'
  }, 350);
  $(".menu-overlay").fadeIn(500);

});
$(".menu-overlay").click(function(event) {
  $(".navbar-toggle").trigger("click");
  $(".menu-overlay").fadeOut(500);
});

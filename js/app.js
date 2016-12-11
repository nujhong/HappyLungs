$( document ).ready(function() {
  $(".section").css("min-height", $(window).height() )

  $(window).scroll(function () {
    $("#package-middle").isVisible() ? ($(".img-animate").addClass("is-active")) : ($(".img-animate").removeClass("is-active"))
  })

  console.log($(".supporting").scrollTop())
})

$.fn.isVisible = function() {
    var elemTop = this[0].getBoundingClientRect().top;
    var elemBottom = this[0].getBoundingClientRect().bottom;

    return (elemTop >= 0 - this[0].height) && (elemBottom <= window.innerHeight);
}

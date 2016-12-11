$( document ).ready(function() {
  $(".section").css("min-height", $(window).height() )
  $(window).scroll(function () {
    if ($("#package-middle").isVisible()) {
      $("#package-middle").addClass("is-active")
      console.log('Ding ding')
    }
    else {
      $("#package-middle").removeClass("is-active")
    }
  })

})

$.fn.isVisible = function() {
    var elemTop = this[0].getBoundingClientRect().top;
    var elemBottom = this[0].getBoundingClientRect().bottom;

    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}

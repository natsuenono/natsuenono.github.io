// header要素にheader.htmlを読み込む
$(function () {
  $('header').load('./common/header.html', function () {
    if (location.pathname == "/") {
      $(".nav-link").each(function () {
        if (this.pathname == "/index.html") {
          $(this).addClass("active");
        }
      });
    } else {
      $(".nav-link").each(function () {
        if (this.pathname == location.pathname) {
          $(this).addClass("active");
        }
      });
    }
  });
})

$(function () {
  $("#js-pagetop").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 0);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
      $('#js-pagetop').fadeIn(200).css('display', 'flex')
    } else {
      $('#js-pagetop').fadeOut(200)
    }
  });
});

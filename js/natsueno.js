$(function () {
  // header要素にheader.htmlを読み込む
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

  $("#js-pagetop").on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 50, 'linear');
  });

  var timer = null;
  $(window).on('scroll', function () {
    clearTimeout(timer)
    timer = setTimeout(function(){BtnFade()}, 150);
  });

  function BtnFade () {
    if ($(window).scrollTop() > 1) {
      $('#js-pagetop').fadeIn(100).css('display', 'flex')
    } else {
      $('#js-pagetop').fadeOut(100)
    }
  }

});
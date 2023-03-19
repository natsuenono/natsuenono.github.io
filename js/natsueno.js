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

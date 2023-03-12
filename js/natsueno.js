// header要素にheader.htmlを読み込む
$(function () {
  $('header').load('./common/header.html', function () {
    $(".nav-item a").each(function () {
      if (this.href == location.href) {
        $(this).parents(".nav-item").addClass("active");
      }
    });
  });
});
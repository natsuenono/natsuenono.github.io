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
    setupThemeToggle();
  });

  // ページトップボタン
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

  // ライト/ダークモード切替
  function setupThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return; // ボタンが存在しなければ終了

    // LocalStorageから取得。なければOS設定で決定
    let theme = localStorage.getItem("theme");
    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    // 初期テーマを反映
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }

    // クリックによる切り替え
    toggleBtn.addEventListener("click", () => {
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    });
  }

});

document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector("header.sticky-top"); // ナビバーを取得
  if (!navbar) return;

  // 対象IDのリスト
  const anchors = ["journalpapers", "books", "internationalconferences", "domesticconferences", "seminars"];

  function applyOffset() {
    const navbarHeight = navbar.offsetHeight;
    // CSS変数として設定（必要に応じてCSSでも参照可能）
    document.documentElement.style.setProperty('--navbar-height', navbarHeight + 'px');

    // 各ターゲット要素に scroll-margin-top を設定
    anchors.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.scrollMarginTop = navbarHeight + "px";
      }
    });
  }

  // 初期実行
  applyOffset();

  // ウィンドウリサイズ時も再計算
  window.addEventListener("resize", applyOffset);
});
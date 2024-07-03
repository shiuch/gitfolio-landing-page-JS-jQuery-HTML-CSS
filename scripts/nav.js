$(function () {
  let lastScrollTop = 0;
  const navbar = $("nav");
  $("#mbNav").hide();
  $("#close").hide();

  $("#menu").on("click", function () {
    $("#mbNav").animate(
      {
        height: "toggle",
      },
      100,
      function () {
        $("#mbNav").show();
      }
    );
    $("#menu").hide();
    $("#close").show();
    $("#mbNav").attr("data-state", "navSt2");
  });
  $("#close").on("click", function () {
    $("#mbNav").animate(
      {
        height: "toggle",
      },
      100,
      function () {
        $("#mbNav").hide();
      }
    );
    $("#close").hide();
    $("#menu").show();
    $("#mbNav").attr("data-state", "navSt1");
  });

  if ($(window).width() <= 1024) {
    $("#mainSec").on("click", function () {
      $("[data-state='navSt2']").animate(
        {
          height: "toggle",
        },
        100,
        function () {
          $("[data-state='navSt2']").hide();
        }
      );
      $("#close").hide();
      $("#menu").show();
      $("[data-state='navSt2']").attr("data-state", "navSt1");
    });
  }
  $(window).scroll(function () {
    if ($(window).width() >= 1025) {
      let scrollTop = $(this).scrollTop();
      console.log(scrollTop);
      if (scrollTop > lastScrollTop && scrollTop > 10) {
        // Скроллим вниз - скрыть панель
        navbar.css("top", "-110px");
      } else {
        // Скроллим вверх - показать панель
        navbar.css("top", "0");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Для Mobile или Negative scrolling
    }
  });
});

$(function () {
  function scrollToPosition(position, duration) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: position,
      },
      duration
    );
  }

  function toggleMobileNav() {
    if ($(window).width() <= 1024) {
      if ($("#mbNav").attr("data-state") == "navSt2") {
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
      }
    }
  }

  $("#logo").click(function () {
    scrollToPosition(0, 300);
    toggleMobileNav();
  });

  $(".nav1").click(function () {
    scrollToPosition($("#sec3").offset().top - 80, 300);
    toggleMobileNav();
  });

  $(".nav2").click(function () {
    scrollToPosition($("#sec5HdDscrp").offset().top + 35, 300);
    toggleMobileNav();
  });

  $(".nav3").click(function () {
    scrollToPosition($("#sec6PlusBlocks").offset().top - 78, 300);
    toggleMobileNav();
  });

  $("#ftr1div img").click(function () {
    scrollToPosition(0, 400);
  });
});

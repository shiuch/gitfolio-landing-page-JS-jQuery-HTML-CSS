$(function () {
  var dataSlider;
  var i = 1;
  var totalImages;

  // Инициализируем первый элемент с opacity 1
  $("#nums div:eq(0)").css("opacity", "1");

  // Загружаем данные с сервера
  $.getJSON("data/sliderImg.json", function (data) {
    dataSlider = data;
    totalImages = Object.keys(dataSlider.imgs).length;
  });

  // Обработчик клика для кнопки "next"
  $("#next").on("click", function (e) {
    e.preventDefault();
    i = (i % totalImages) + 1;
    updateSlider(i);
  });

  // Обработчик клика для кнопки "prev"
  $("#prev").on("click", function (e) {
    e.preventDefault();
    i = i === 1 ? totalImages : i - 1;
    updateSlider(i);
  });

  // Функция обновления слайдера
  function updateSlider(index) {
    $("#imgSlide").attr("src", dataSlider.imgs["img" + index]);
    $("#nums div").css("opacity", "0.5");
    $("#nums div:eq(" + (index - 1) + ")").css("opacity", "1");
  }
});

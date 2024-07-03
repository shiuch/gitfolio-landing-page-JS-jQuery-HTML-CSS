$(function () {
  function checkFormFields() {
    let allFilled = true;
    $("#name, #phone").each(function () {
      if ($(this).val().trim() === "") {
        allFilled = false;
        return false; // Прерываем each, если нашли пустое поле
      }
    });
    return allFilled;
  }

  $("#name, #phone").on("focus", function (e) {
    if (checkFormFields()) {
      $("#formSmbt").prop("disabled", false);
    } else {
      $("#formSmbt").prop("disabled", true);
    }
  });
  $("#name, #phone").on("blur", function (e) {
    if (checkFormFields()) {
      $("#formSmbt").prop("disabled", false);
    } else {
      $("#formSmbt").prop("disabled", true);
    }
  });

  $(".aplEl").on("click", function (e) {
    e.preventDefault();
    $("#name").val("");
    $("#phone").val("");
    $("body").css("overflow-y", "hidden");
    $("#fsBG").fadeIn(150);
    $("#name").focus();
  });

  $("#formClose").on("click", function () {
    $("body").css("overflow-y", "scroll");
    $("#fsBG").fadeOut(150);
  });
});

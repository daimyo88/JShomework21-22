"use strict";

$(function () {

  var testsStr = JSON.stringify(testsList);
  localStorage.setItem(tests, testsStr);
  var tests = JSON.parse(localStorage.getItem(tests)); //ненужные манипуляции для ДЗ

  var testsHtml = $("#testsTemplate").html();
  var testsContent = tmpl(testsHtml, { data: tests });
  $(".tests-container").append(testsContent); //генерируем шаблонизатором содержимое

  var testCondition = true; //тесты идут/закончены
  var correctAnswers = 0; //кол-во правильных ответов
  var totalQuestions = $(".question-container").length; //общее кол-во вопросов

  var testRun = function testRun(boolean) {
    if (boolean) {
      //если тесты идут

      var chekedAnswers = $("input:checked"); //кол-во отмеченых вопросов

      if (chekedAnswers.length != totalQuestions) return false; //если отметили не все - ничего не делаем

      for (var i = 0; i < chekedAnswers.length; i++) {
        //проходимся по выбраным ответам

        if (chekedAnswers[i].id == tests[i].rightAnswer) {
          chekedAnswers[i].className = "check-correct"; //вешаем визуальные еффекты
          correctAnswers++;
        } else chekedAnswers[i].className = "check-wrong";
      }

      $("#modal-correct-answers").html(correctAnswers); //заполняем-показываем модальное окно
      $("#modal-total-answers").html(totalQuestions + ".");
      $(".results-overlay").show();

      $("#check-btn").html("Начать заново");
      $("input:radio").attr("disabled", "");
    } else {
      //если тесты окончены- перезапускаем их, все обнуляем
      $("input:radio").removeAttr("disabled").prop("checked", false).removeClass().addClass("check-default");

      $("#check-btn").html("Проверить результаты");
      correctAnswers = 0;
    }

    testCondition = !testCondition;
  };

  $("#check-btn").on("click", function (e) {
    e.preventDefault();
    testRun(testCondition);
  });

  $("#result-btn").on("click", function () {
    return $(".results-overlay").hide();
  });
});
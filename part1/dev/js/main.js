$(() => {

    let testsStr = JSON.stringify(testsList);
    localStorage.setItem(tests, testsStr);
    let tests = JSON.parse(localStorage.getItem(tests));  //ненужные манипуляции для ДЗ

    let testsHtml = $("#testsTemplate").html();
    let testsContent = tmpl( testsHtml, { data : tests });
    $(".tests-container").append(testsContent);   //генерируем шаблонизатором содержимое

    let testCondition  = true;     //тесты идут/закончены
    let correctAnswers = 0;        //кол-во правильных ответов
    let totalQuestions = $(".question-container").length;  //общее кол-во вопросов

    let testRun = (boolean) => {
      if (boolean) {             //если тесты идут

        let chekedAnswers = $("input:checked");  //кол-во отмеченых вопросов

        if (chekedAnswers.length != totalQuestions) return false; //если отметили не все - ничего не делаем

        for ( let i = 0; i < chekedAnswers.length; i++) {  //проходимся по выбраным ответам

          if ( chekedAnswers[i].id == tests[i].rightAnswer) {
            chekedAnswers[i].className = "check-correct";  //вешаем визуальные еффекты
            correctAnswers++;
          }

          else chekedAnswers[i].className = "check-wrong";
        }

        $("#modal-correct-answers").html(correctAnswers);      //заполняем-показываем модальное окно
        $("#modal-total-answers").html(totalQuestions + ".");
        $(".results-overlay").show();

        $("#check-btn").html("Начать заново");
        $("input:radio").attr("disabled","");
      }

        else {                  //если тесты окончены- перезапускаем их, все обнуляем
          $("input:radio")
            .removeAttr("disabled")
            .prop("checked", false)
            .removeClass()
            .addClass("check-default");

          $("#check-btn").html("Проверить результаты");
          correctAnswers = 0;
        }

        testCondition = !testCondition;
    }

    $("#check-btn").on("click", (e) => {
         e.preventDefault();
         testRun(testCondition);
     })

    $("#result-btn").on("click", () => $(".results-overlay").hide());
});

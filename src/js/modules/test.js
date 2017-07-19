(function () {
	var curQuestion = 0;

	$(document).ready(function() {
		

		$("#start-test").click(function(e) {
			e.preventDefault();

			/*if (typeof(dataLayer) !== 'undefined') {

			if (parseInt(dataLayer[0].userAuth) === 0) {
				$('body').ScrollTo(0, 2000);
				$('.action-popup-login').addClass('make-visible');
				$('.action-popup-overlay').addClass('make-visible');
			} else {*/
				$("#start-test").css("display", "none");
				$("#road-to-success").css("display", "none");
				//$(".tests__wrapper").css("display", "none");
				$(".tests-start-text").css("display", "none");
				$(".tests-start-text2").css("display", "block");
				//$(".tests__wrapper2").css("display", "block");
				//$("#crazy-quiz").css("display", "block");
				setQuestion();
			//}
		//}      	
		});
		$("#q-g-f").click(function (e) {
			e.preventDefault();
			if (curQuestion !== 9) {
				curQuestion++;
				setQuestion();

			} else {
				$("#q-form").css("display", "none");
				$("#q-g-f").css("opacity", 0);
				$("#q-g-b").css("opacity", 0);
				$("#q-number").css("display", "none");
				$("#q-text").css("display", "none");
				$("#q-counter").css("opacity", 0);
				$("#q-results").css("display", "block");
				$("#q-results").html(getDisplayHtml());
				//$("#restart-test").css("opacity", 0);
			}
		});
		
		$("#q-g-b").click(function () {
			if (curQuestion !== 0) {
				curQuestion--;
				setQuestion();
			}
		});

		$("#q-opt_0").click(function() {
			setAnswerForQuestion(0);
		});
		$("#q-opt_1").click(function () {
			setAnswerForQuestion(1);
		});
		$("#q-opt_2").click(function () {
			setAnswerForQuestion(2);
		});
		$("#q-opt_3").click(function () {
			setAnswerForQuestion(3);
		});

		$("#q-opt-txt_0").click(function(){
			$("#q-opt_0").trigger("click");
			setAnswerForQuestion(0);
		});
		$("#q-opt-txt_1").click(function(){
			$("#q-opt_1").trigger("click");
			setAnswerForQuestion(1);
		});
		$("#q-opt-txt_2").click(function(){
			$("#q-opt_2").trigger("click");
			setAnswerForQuestion(2);
		});
		$("#q-opt-txt_3").click(function(){
			$("#q-opt_3").trigger("click");
			setAnswerForQuestion(3);
		});
	});

	

	function getDisplayHtml() {
		var score = getScore();
		var promo = "";
		if (score === 100) {
			promo = "<div class='test-promocode'>MOBIL20</div>";
			$("#restart-test").css("opacity", 0);
		}
		if (score === 90) {
			promo = "<div class='test-promocode'>MOBIL15</div>";
			$("#restart-test").css("opacity", 0);
		}
		if (score === 80) {
			promo = "<div class='test-promocode'>MOBIL10</div>";
			$("#restart-test").css("opacity", 0);
		}

		if (promo === "") {
			$("#restart-test").css("display", "block");
			return "<div class='test-congratulations-none'><b>Поздравляем с завершением теста!</b><br> Вы набрали " + (score / 10) + " из 10 правильных ответов.<br> К сожалению, вы не набрали достаточно баллов для получения скидки.<br> Не отчаивайтесь, увидимся в Юлмарте.:)<br></div>";
			
		} else {
			return "<div class='test-congratulations'>Поздравляем <br> с завершением теста!</div> <div class='test-text'>Вы набрали " + (score / 10) + " из 10 правильных ответов.</div> <br> Ваш промокод на скидку в <b>" + promo.charAt(33) + promo.charAt(34) + "%</b>:" + promo + "<a href='https://www.ulmart.ru/Engine_oil_M07?sort=0&viewType=1&rec=false' class='go-selection' onclick='pushStateToDataLayerMBL1TransitionToPurchase(event) ('MBL1TransitionToPurchase', 'TransitionToPurchase')', target='_blank'>Перейти к выбору масла</a>";
		}

	}

	function getScore() {
		var correct = 0;
		for (var i = 0; i < answers.length; i++) {
			if (questions[i].correct === answers[i]) {
				++correct;
			}
		}
		return (correct / questions.length) * 100;
	}

	function setQuestion() {

		$("#q-number").html("Тест. <span> Вопрос </span> " + (curQuestion + 1) + " из 10");
		$("#q-text").text(questions[curQuestion].text);

		$('#q-opt-txt_0').text(questions[curQuestion].options[0]);
		$('#q-opt-txt_1').text(questions[curQuestion].options[1]);
		$('#q-opt-txt_2').text(questions[curQuestion].options[2]);
		$('#q-opt-txt_3').text(questions[curQuestion].options[3]);

		for (var i = 0; i < 4; i++) {
			$("#q-opt_" + i).prop('checked', false);
		}

		if (answers[curQuestion] !== -1) {
			$("#q-opt_" + answers[curQuestion]).prop('checked', true);
		}

		$("#q-counter").text("Осталось " + (questions.length - (curQuestion + 1)) + " из " + questions.length);
	}

	function setAnswerForQuestion(ans) {
		//if()

		answers[curQuestion] = ans;
		for (var i = 0; i < 4; i++) {
			$("#q-opt_" + i).prop('checked', false);
		}
		$("#q-opt_" + ans).prop('checked', true);
		console.log(answers);
	}
	/*close-popups*/
	$('.action-popup-overlay').on('click', function() {
		$(this).removeClass('make-visible');
	});

	$('.action-popup-close').on('click', function(e) {
		e.preventDefault();
		$('.action-popup-overlay').removeClass('make-visible');
		$('.action-popup-sucess').removeClass('make-visible');
	});

	var answers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
	var questions = [
		{
			text: "Что станет с двигателем автомобиля если не использовать моторное масло?",
			options: ["Детали в двигателе мгновенно износятся", "Изменений не произойдет", "Двигатель прослужит дольше", "Двигатель будет лучше работать в жару"],
			correct: 0,
			hint: null
		}, {
			text: "Для чего нужно трансмиссионное масло?",
			options: ["Для добавления в моторное масло", "Для смазки коробок передач", "Для добавления в топливо", "Используется для охлаждения двигателя"],
			correct: 1,
			hint: null
		}, {
			text: "Мой автомобиль испускает дым при запуске. На что указывает появление черного дыма?",
			options: ["Автомобиль готов к взлету", "Моторное масло подобрано верно", "Дым черного цвета может указывать на сгорание избыточного количества топлива",
			"Ни на что не указывает "],
			correct: 2,
			hint: null
		}, {
			text: "Почему нужно регулярно менять моторное масло?",
			options: ["Со временем оно теряет свою эффективность и больше не может обеспечивать надлежащую защиту двигателя", "Иначе страховку аннулируют", "Чтобы автомобиль быстрее ездил", "Регулярная замена масла экономит затраты на бензин"],
			correct: 0,
			hint: null
		}, {
			text: "Что означает индекс вязкости (VI)?",
			options: ["То, на сколько масло подходит к двигателю автомобиля", "Индекс вязкости (VI) служит мерой относительного изменения вязкости масла в зависимости от температуры", "Термин из физики, к моторному маслу не применяется", "Используется при вязании шерстяных изделий"],
			correct: 1,
			hint: null
		}, {
			text: "Почему может загораться индикатор давления масла?",
			options: ["Низкий уровень масла", "Отказ масляного насоса", "Избыточное пенообразование масла", "Все выше перечисленные "],
			correct: 3,
			hint: null
		}, {
			text: "Где производятся смазочные материалы Mobil для поставок в Россию? ",
			options: ["Япония", "ЮАР", "Европейский союз (Финляндия, Франция, Швеция)", "Куба"],
			correct: 2,
			hint: null
		}, {
			text: "Официальным маслом каких соревнований является Mobil 1™? ",
			options: ["Чемпионат NASCAR", "Чемпионат Европы по дзюдо", "Гран-при Монако", "Кубок мира по самбо"],
			correct: 0,
			hint: null
		},
		{
			text: "Какие марки автомобилей используют масла Mobil 1™ для заводской заливки:",
			options: ["Porsche", "КАМАЗ", "Ford", "LADA"],
			correct: 0,
			hint: null
		},
		{
			text: "Как синтетическое моторное масло Mobil 1™ работает и защищает двигатель в холодном климате:",
			options: ["Синтетическое моторное масло Mobil 1 сохраняет текучесть даже при низких температурах, что позволяет маслу нормально циркулировать и смазывать детали двигателя.", "Никак не защищает",
			"У масла повышается вязкость и оно начинает эффективнее защищать двигатель", "В холодном климате нельзя использовать синтетическое масло"],
			correct: 0,
			hint: null
		}
	];
	$("#restart-test").click(function(e) {
		e.preventDefault();
		console.log('click restart');
		//$("#tests__wrapper").css("display", "block");
		$("#start-test").css("display", "block");
		$(".tests__wrapper2").css("display", "block");
		$(".tests-start-text2").css("display", "none");
		$(".tests-start-text").css("display", "block");
		$("#restart-test").css("display", "none");
		$("#q-form").css("display", "block");
		$("#q-results").css("display", "block");
		$("#q-text").css("display", "block");
		$("#q-number").css("display", "block");
		$(".test-congratulations-none").css("display", "none");
		$("#q-g-f").css("opacity", 1);

		curQuestion = 0;

		setQuestion();
	});


	$('.go-to-test').click(function(e){
		e.preventDefault();
		var scrollTop = $('#tests__wrapper').offset().top;
		$(document).scrollTop(scrollTop);
	})

}());
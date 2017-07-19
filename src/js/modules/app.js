console.log('Hellow World');

function pushStateToDataLayerMBL1UlmartLogo(event) {
		return function(label, location) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventLocation': location
			});
			console.log('click logo');
		}
};

function pushStateToDataLayerMBL1GoToUlmart(event) {
		return function(label, location) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventLocation': location
			});
			console.log('click GoToUlmart');
		}
};

function pushStateToDataLayerMBL1goToTest(event) {
	$(this).click(function() {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 800);
		return false;
	});
		return function(label, location) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventLocation': location
			});
			console.log('click goToTest');
		}
};

function pushStateToDataLayerMBL1RepeatTest(event) {
	return function(label, location) {
		dataLayer.push({
						'event':'OWOX',
						'eventCategory': 'Interactions',
						'eventAction': 'click',
						'eventLabel': label,
						'eventContent': event.target.innerHTML.trim(),
						'eventLocation': location
		});
		console.log('click RepeatTest');
	}
};

function pushStateToDataLayerMBL1TransitionToPurchase(event) {
		return function(label, location) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventLocation': location
			});
			console.log('click TransitionToPurchase');
		}
};

function pushStateToDataLayerMBL1selectOil(event) {
		return function(label, location) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventLocation': location
			});
			console.log('click MBL1selectOil');
		}
};

function pushStateToDataLayerMBL1startTest(event) {
		return function(label, location) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventLocation': location
			});
			console.log('click startTest');
		}
};

function pushStateToDataLayerMBL1IssuesOne(event) {
		return function(label, context) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventContext': context
			});
			console.log('click IssuesOne');
		}
};

function pushStateToDataLayerMBL1IssuesTwo(event) {
		return function(label, context) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventContext': context
			});
			console.log('click IssuesTwo');
		}
};

function pushStateToDataLayerMBL1IssuesThree(event) {
		return function(label, context) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventContext': context
			});
			console.log('click IssuesThree');
		}
};

function pushStateToDataLayerMBL1IssuesFour(event) {
		return function(label, context) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventContext': context
			});
			console.log('click IssuesFour');
		}
};




function pushStateToDataLayerMBL1nextQuestion(event) {
		return function(label, location, count) {
				var option = $('.q-number-option').text();
				var count = option;
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventLocation': location,
							'eventContext': count
			});
			console.log('click next question');
		}

};

function pushStateToDataLayerMBL1seeProduct(event) {
		return function(label, location, id) {
			dataLayer.push({
							'event':'OWOX',
							'eventCategory': 'Interactions',
							'eventAction': 'click',
							'eventLabel': label,
							'eventContent': event.target.innerHTML.trim(),
							'eventLocation': location,
							'eventContext': id
			});
			console.log('click goods');
		}
};
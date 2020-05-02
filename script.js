window.addEventListener('DOMContentLoaded', function() {

	'use strict';
	//TABS
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');
	
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTabContent(1);
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for(let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}

	});


	//Timer

	let deadLine = '2020-04-22';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor ((t/(1000*60*60)));

		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);


		function updateClock() {
			let t = getTimeRemaining(endtime);

			function addZero(num){
				if(num <= 9) {
					return '0' + num;
				} else return num;
			}

			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);
			if (t.total <= 0) {      
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
				clearInterval(timeInterval);
			}
		}
	}

	setClock('timer', deadLine);

	//modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
	more.addEventListener('click', function() {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden'; //отключение прокрутки когда открылась модальное окно
	});

	//закрытие модального окна на крестик
	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = ''; //включение прокрутки
	});

	let descr = document.querySelectorAll('.description-btn');
	for(let i = 0; i < descr.length; i++) {
		descr[i].addEventListener('click', function() {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});}		




	//form

	let message = {
		loading: "Download..",
		sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
		failure: "Что-то пошло не так"
	};

	let form = document.querySelectorAll('form'),
		input = document.querySelectorAll('input'),
		statusMessage = document.createElement('div');

		statusMessage.classList.add('status');
		
	
	for (let i = 0; i < form.length; i++) {
		form[i].addEventListener('submit', function(event) {
			event.preventDefault();
			form[i].appendChild(statusMessage);

			let formData = new FormData(form[i]);

			function postData(data) {

				return new Promise(function(resolve,reject) {
					let request = new XMLHttpRequest();

					request.open('POST', 'server.php');

					request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

					request.onreadystatechange = function() {
						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								resolve();
							}	
							else {
								reject();
							}	
						} 
					};
					request.send(data);
				});
			}
			function clearInput () {
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}
			postData (formData)
			.then (() => statusMessage.innerHTML = message.loading)
			.then (() => statusMessage.innerHTML = message.sucsess)
			.catch (() => statusMessage.innerHTML = message.failure)
			.then (clearInput);	
		});
	}

	//slider

	let slideIndex = 1, // Параметр текущего слайда
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

	showSlides(1);
	function showSlides(n) {
		
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		
		slides.forEach((item) => item.style.display = 'none');
		// for (let i = 0; i < slides.length; i++) { - Одно и тоже что выше 
		// 	slides[i].style.display = 'none';
		// }
		dots.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function() {
		plusSlides(-1);
	});

	next.addEventListener('click', function() {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length +1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});

	//Calc

	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;

		persons.addEventListener('input', function() {
			personsSum = +this.value;
			total = (daysSum + personsSum)*4000;

			if(restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});

		restDays.addEventListener('input', function() {
			daysSum = +this.value;
			total = (daysSum + personsSum)*4000;

			if(persons.value == '' || restDays.value == '') {
				totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		});
		place.addEventListener('change', function() {
			if (restDays.value == '' && persons.value == '') {
				totalValue.innerHTML = 0;
			} else {
				let a = total;
				totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			}
		});
});
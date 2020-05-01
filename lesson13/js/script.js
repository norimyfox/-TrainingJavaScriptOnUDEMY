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
		statusMassage = document.createElement('div');

		statusMassage.classList.add('status');
	
	for (let i = 0; i < form.length; i++) {
		form[i].addEventListener('submit', function(event) {
			event.preventDefault();
			form[i].appendChild(statusMassage);
	
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Вариант не JSON
			request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // JSON
	
			let formData = new FormData(form[i]);
			
			//обьект для JSON 
			let obj = {};
			formData.forEach(function(value, key) {
				obj[key] = value;
			});
			let json = JSON.stringify(obj);
			//конец объекта
			
	
			request.send(json); // JSON
			// request.send(formData); // Обычный вариант
	
			request.addEventListener('readystatechange', function() {
				if (request.readyState < 4) {
					statusMassage.innerHTML = message.loading;
				} else if (request.readyState === 4 && request.status == 200) {
					statusMassage.innerHTML = message.sucsess;
				} else {
					statusMassage.innerHTML = message.failure;
				}
			});
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
		});
	}

});

"use strict"
let start = document.getElementById('start'), //Начать расчет
	budgetVal = document.getElementsByClassName('budget-value') [0], //Доход
	dayBudgetVal = document.getElementsByClassName('daybudget-value') [0], //Бюджет на 1 день
	levelVal = document.getElementsByClassName('level-value') [0], //Уровень дохода
	expensesVal = document.getElementsByClassName('expenses-value') [0], //Поле ввода Обязательные расходы
	optExpenesVal = document.getElementsByClassName('optionalexpenses-value') [0], //Возможные траты
	incomeVal = document.getElementsByClassName('income-value') [0], //Дополнительный доход
	monthSavingsVal = document.getElementsByClassName('monthsavings-value') [0], //Накопления за 1 месяц
	yearSavingsVal = document.getElementsByClassName('yearsavings-value') [0], //Накопления за 1 год
	expInput = document.getElementsByClassName('expenses-item'), //Поля input 

	expBtn = document.getElementsByTagName('button') [0],// Утвердить (1)
	optBtn = document.getElementsByTagName('button') [1], //Утвердить (2)
	countBtn = document.getElementsByTagName('button') [2], //Рассчитать

	optExItem = document.querySelectorAll('.optionalexpenses-item'), //Поля ввода необяз. расходов

	chooseInc = document.querySelector('.choose-income'), // Поле возможного дохода
	checkBox = document.querySelector('#savings'), //Чек бокс накоплений
	inputSum = document.querySelector('.choose-sum'), //Поле ввода "Сумма"
	inputPerc = document.querySelector('.choose-percent'), //Полее ввода "Процент"
	year = document.querySelector('.year-value'), //Поле ввода "год"
	month = document.querySelector('.month-value'), //Поле ввода "месяц"
	day = document.querySelector('.day-value'); //Поле ввода "день"

let money, time; //переменные вынесены за функцию для доступа к ним

start.addEventListener('click', function() {
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?", ""); 
	}
	appData.budget = money;
	appData.timeData = time;
	budgetVal.textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate();

	expBtn.addEventListener('click', function() {
		let sum = 0;
	
		for (let i = 0; i < expInput.length; i++) {
			let a = expInput[i].value,
				b = expInput[++i].value;
		
			if ( (typeof(a))=== "string" && a != null && b != null && a != "" && b != "" && a.length < 50 ) {
				console.log("done");
				appData.expenses[a] = b;
				sum += +b;
			} else {
				i = i - 1;
			}
		}
		expensesVal.textContent = sum;
	});
	
	optBtn.addEventListener('click', function(){
		for (let i = 0; i < optExItem.length; i++) {
			let	a = optExItem[i].value;
	
			if (a != null && a != "") {
				appData.optionalExpenses[i] = a;
				optExpenesVal.textContent += appData.optionalExpenses[i] + ' ';
			} else {
				i--;
			}	
		}
	});
	
	countBtn.addEventListener('click', function() {
	
		if (appData.budget != undefined) {
			appData.moneyPerDay = (appData.budget / 30).toFixed();
			dayBudgetVal.textContent = (+money - +expensesVal.textContent / 30).toFixed();
		
			if(appData.moneyPerDay < 100) {
				levelVal.textContent = "Минимальный уровень достатка";
			} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
				levelVal.textContent = "Средний уровень достатка";
			} else if (appData.moneyPerDay > 2000) {
				levelVal.textContent = "Высокий уровень достатка";
			} else {
				levelVal.textContent = "Произошла ошибка";
			}
		} else {
			dayBudgetVal.textContent = 'Произошла ошибка';
		}
	});
	
	chooseInc.addEventListener('input', function() {
		let items = chooseInc.value;
		appData.income = items.split(', ');
		incomeVal.textContent = appData.income;
	});
	
	checkBox.addEventListener('click', function() {
		if (appData.savings == true) {
			appData.savings = false;
		} else {
			appData.savings = true;
		}
	});
	
	inputSum.addEventListener('input', function() {
		if (appData.savings == true) {
			let sum = +inputSum.value,
				percent = +inputPerc.value;
	
			appData.monthIncome = sum/100/12*percent;
			appData.yearIncome = sum/100*percent;
	
			monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
			yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
		}
	});
	
	inputPerc.addEventListener('input', function() {
		if (appData.savings == true) {
			let sum = +inputSum.value,
				percent = +inputPerc.value;
	
			appData.monthIncome = sum/100/12*percent;
			appData.yearIncome = sum/100*percent;
	
			monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
			yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
		}
	});
});
let appData={ 
	budget: money,
	timeData: time,
	expenses: {}, //обязательные расходы
	optionalExpenses: {}, //не обязательные расходы 
	income: [], //массив данных с доп. доходом  (оставляем пока пустым)
	savings: false,
};
console.log(expensesVal);

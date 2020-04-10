"use strict"

let money, time; //переменные вынесены за функцию для доступа к ним
function start() { //Сбор информации по бюджету
	money = +prompt("Ваш бюджет на месяц?", ""); 
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", ""); 
	}
}
start();

let appData={ 
    budget: money,
    timeData: time,
    expenses: {}, //обязательные расходы
    optionalExpenses: {}, //не обязательные расходы 
    income: [], //массив данных с доп. доходом  (оставляем пока пустым)
    savings: true,
};

function chooseExpenses() { //Сбор информации по расходам в месяц
	for (let i = 1; i < 3; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if ( (typeof(a))=== "string" && a != null && b != null && a != "" && b != "" && a.length < 50 ) {
			console.log("done");
			appData.expenses[a] = b;
			} else {
			alert("Ошибка при вводе данных, повторите попытку!"),
			console.log("error!"),
			i--;
			}
	}
}
chooseExpenses();

function chooseOptExpenses() { //Способ FOR
	for (let i = 1; i < 4; i++) {
		let	a = +prompt("Статья необязательных расходов?");

		if (a != null && a != "" && a.length < 50 ) {
			console.log("done", i);
			appData.optionalExpenses[i] = a;
			} else {
			alert("Ошибка при вводе данных, повторите попытку!"),
			console.log("error!", i),
			i--;
			}	
	}
}
chooseOptExpenses();
/* 
function chooseOptExpenses() { // Способ WHILE!
	let i = 1;
	while (i < 4) {
		let	a = prompt("Статья необязательных расходов?");

		if (a != null && a != "" && a.length < 50 ) {
			console.log("done", i);
			appData.optionalExpenses[i] = a;
			} else {
			alert("Ошибка при вводе данных, повторите попытку!"),
			console.log("error!", i),
			i--;
			}
		i++;
	}
}
chooseOptExpenses(); */

function detectDayBudget() { // Расчет дневного бюджета
	appData.moneyPerDay = (appData.budget / 30).toFixed(1);
	alert("Ежедневный бютжет: " + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
	if(appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка"); 
	} else {
		console.log("Произошла ошибка");
	}
}
detectLevel();

function checkSavings() { //расчет дохода в месяц с депозита
	if (appData.savings = true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " +appData.monthIncome);
	}
}
checkSavings();

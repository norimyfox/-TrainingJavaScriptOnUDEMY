'use strict'

let start = document.getElementById('start'); //Начать расчет
let budgetVal = document.getElementsByClassName('budget-value'); //Доход
let dayBudgetVal = document.getElementsByClassName('daybudget-value'); //Бюджет на 1 день
let levelVal = document.getElementsByClassName('level-value'); //Уровень дохода
let expensesVal = document.getElementsByClassName('expenses-value'); //Обязательные расходы
let optExpenesVal = document.getElementsByClassName('optionalexpenses-value'); //Возможные траты
let incomeVal = document.getElementsByClassName('income-value'); //Дополнительный доход
let monthSavingsVal = document.getElementsByClassName('monthsavings-value'); //Накопления за 1 месяц
let yearSavingsVal = document.getElementsByClassName('yearsavings-value'); //Накопления за 1 год
let input = document.getElementsByClassName('expenses-item'); //Поля input 

let buttons = document.getElementsByTagName('button'); //Все buttons
let expBtn = (buttons[0]); // Утвердить (1)
let optBtn = (buttons[1]); //Утвердить (2)
let countBtn = (buttons[2]); //Рассчитать

let optExItem = document.querySelectorAll('.optionalexpenses-item'); //Поля ввода необяз. расходов

let chooseInc = document.querySelector('.choose-income'); // Поле возможного дохода
let checkBox = document.querySelector('#savings'); //Чек бокс накоплений
let inputSum = document.querySelector('.choose-sum'); //Поле ввода "Сумма"
let inputPerc = document.querySelector('.choose-percent'); //Полее ввода "Процент"
let year = document.querySelector('.year-value'); //Поле ввода "год"
let month = document.querySelector('.month-value'); //Поле ввода "месяц"
let day = document.querySelector('.day-value'); //Поле ввода "день"
console.log(year);
'use strict'

let money=prompt("Ваш бюджет на месяц?", ""), //Вопрос пользователю в модальном окне
    time=prompt("Введите дату в формате YYYY-MM-DD", ""); //Вопрос пользователю в модальном окне

let appData={ 
    budget: money,
    timeData: time,
    expenses: {"a1" : "a3"}, //обязательные расходы
    optionalExpenses: "", //не обязательные расходы  (оставляем пока пустым)
    income: [], //массив данных с доп. доходом  (оставляем пока пустым)
    savings: false,
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');
    
appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

alert(appData.budget / 30);
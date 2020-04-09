'use strict'

let money=+prompt("Ваш бюджет на месяц?", ""), //Вопрос пользователю в модальном окне
    time=prompt("Введите дату в формате YYYY-MM-DD", ""); //Вопрос пользователю в модальном окне

let appData={ 
    budget: money,
    timeData: time,
    expenses: {}, //обязательные расходы
    optionalExpenses: "", //не обязательные расходы  (оставляем пока пустым)
    income: [], //массив данных с доп. доходом  (оставляем пока пустым)
    savings: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a))=== "string" && a != null && b != null && a != "" && b != "" && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
        } else {
        alert("Ошибка при вводе данных, повторите попытку!"),
        console.log("error!")
        i--;
        }
};

/* let i = 0;
while ( i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ( (typeof(a))=== "string" && a != null && b != null && a != "" && b != "" && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
        i++
    } else {
        alert("Ошибка при вводе данных, повторите попытку!");
        console.log("error!")
    }
}; */

/* let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a))=== "string" && a != null && b != null && a != "" && b != "" && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
        i++;
        } else {
        alert("Ошибка при вводе данных, повторите попытку!"),
        console.log("error!");
    }
}
while ( i < 2 ); */

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бютжет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка"); 
} else {
    console.log("Произошла ошибка");
}
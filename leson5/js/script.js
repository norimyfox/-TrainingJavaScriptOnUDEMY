let menu = document.querySelector('.menu'); //Выводим <nav class="menu"></nav>
let menuItem = document.querySelectorAll('.menu-item'); //Выводим <li class="menu-item"></li>
let idTitle = document.querySelectorAll('.title'); //Текст 0 нужно заменить
let adv = document.querySelector('.adv'); //Реклама - нужно удалить
let question = document.querySelector('.prompt'); //Вопрос пользователю

// Добавил к каждому column по еще одному классу путём отключение 1-го column 
let column = document.querySelector('.column'); // Добавили column[0]
column.classList.add('column1'); // class column + column1
column.classList.toggle('column'); // class cloumn - Off

let column2 = document.querySelector('.column'); // Добавили column[1]
column2.classList.toggle('column2'); // column + column2
column.classList.toggle('column'); // class column - On

let title = document.createElement('div'); //Новый текст на замену 
title.classList.add('title'); //Добавление класса div class="title"
title.textContent = ('Мы продаем только подлинную технику Apple'); //Добавление текста в div
column2.replaceChild(title, idTitle[0]); //Замена не полного текста на новый
column2.removeChild(adv); //Удалили рекламу

let textQuest = document.createElement('div'); //Новый блок для текста в блок question
question.appendChild(textQuest); //Добавление блока в блок question
let qv = prompt('Ваше отношение к технике Apple?', ''); //Вопрос пользователю
textQuest.textContent = qv; //Добавление ответа в блок


//Добавления нового элемента в nav и правильное выставление пунктов меню
let li = document.createElement('li'); //Создаём элемент <li></li>
li.classList.add('menu-item'); //Добавляем класс <li class="menu-item"></li>
li.textContent = ('Пятый пункт'); //Добавляем текст <li class="menu-item">Пятый пункт</li>
menu.appendChild(li); //Добавляем созданный элемент в <nav class="menu"></nav> на последнее место
menu.insertBefore(menuItem[2], menuItem[1]); //Меняем местами "Второй пункт" и "Третий пункт"


//Смена background изображения
document.body.style.background = 'url(../img/apple_true.jpg) center center/cover no-repeat'; //Замена фона сайта

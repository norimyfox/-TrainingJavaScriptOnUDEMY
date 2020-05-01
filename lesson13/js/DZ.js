window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    // Вывод значения input 
    let age = document.getElementById('age'),
    ages = showUser.bind(age);
        
    function showUser(surname, name) {
        alert(`Пользователь ${surname} ${name} его возраст ${this.value}`);
    }
    ages('surname', 'name');

});
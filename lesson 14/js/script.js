let inputGrn = document.getElementById('grn'),
    inputUsd = document.getElementById('usd');

inputGrn.addEventListener('input', () => {
    function getMoney() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest(); //Главный объект для работы с AJAX

            request.open('GET', 'js/current.json'); //Запрос к серверу настроен
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //Настройки запроса Http с указанием контента
            request.send();

            request.onload = function() {
                if (request.readyState === 4) {
                    if (request.status == 200) {
                        let data = JSON.parse(request.response);
                        resolve(data);
                    }
                    else{
                        reject();
                    }
                }  
            };
        });
    }
    getMoney ()
    .then ((data)=> inputUsd.value = inputGrn.value / data.usd)
    .catch (() => inputUsd.value = "Что-то не так!");  
});
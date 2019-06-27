//получаем кнопку через ID
let openShopBtn = getElementById('open-btn');
//получаем список полей через селектор и записываем в объект
let leftMenu = {
	name-value: document.querySelector('.name-value'),
	budget-value: document.querySelector('.budget-value'),
	goods-value: document.querySelector('.goods-value'),
	items-value: document.querySelector('.items-valuee'),
	employers-value: document.querySelector('.employers-value'),
	discount-value: document.querySelector('.discount-value'),
	isopen-value: document.querySelector('.isopen-valu')
}
//Получаем поля категорий товаров через класс
let stringFour = document.getElementsByClassName('goods-item');

//Получаем все кнопки по тегу button
let buttons = document.getElementsByTagName('button');

//получаем все поля для расчетов
let choose_item = document.querySelector('.choose_item'); //введите продукты через запятую
let time_value = document.querySelector('.time-value'); // Сколько сейчас времени?
let count_budget_value = document.querySelector('.count-budget-value'); //Расчет дневного бюджета
// Получение имен сотрудников в правом меню!
let employers_1 = document.getElementById('employers_1');
let employers_2 = document.getElementById('employers_2');
let employers_3 = document.getElementById('employers_3');


/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch. Отобразите на странице имена персонажей из 
Рика и Морти в list.
(Вы можете стилизовать страницу по желанию.)
*/
/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/
let list = document.querySelector(".list");
function nameAdd() {
	// list.innerHTML = ''
	fetch("https://rickandmortyapi.com/api/character")
		.then(res => res.json())
		.then(data => {
			console.log(data.results);
			data.results.forEach(item => {
				list.innerHTML += `
				<li>Name: ${item.name} image:<img src="${item.image}" width="30vw"
				</li>

				`;
			});
		});
}
nameAdd();

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

let arr = [];
function viewDb() {
	fetch("https://rickandmortyapi.com/api/character")
		.then(res => res.json())
		.then(data => {
			data.results.forEach(item => {
				arr.push(item);
			});
		});
}
viewDb();
// setTimeout(()=> {
// 	console.log(arr);
// 	arr.forEach(item => {
// 		fetch("http://localhost:8000/characters", {
// 			method: "POST",
// 			body: JSON.stringify(item),
// 			headers: {
// 				"Content-Type": "application/json;charset=utf-8",
// 			},
// 		});
// 	});
// }, 1000) 
let list2 = document.querySelector(".list2");
function nameAdd2() {
	// list.innerHTML = ''
	fetch("http://localhost:8000/characters")
		.then(res => res.json())
		.then(data => {
			// console.log(data.results);
			data.forEach(item => {
				list2.innerHTML += `
				<li>Name: ${item.name} image:<img src="${item.image}" width="30vw"
				</li>

				`;
			});
		});
}
nameAdd2();
/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

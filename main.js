let page = 1

function render() {
	let container = document.querySelector(".container");
	container.innerHTML = "";
	fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}$_limit=10`)
		.then(res => res.json())
		.then(data => {
			data.forEach(item => {
				container.innerHTML += `
					<div class="card">
							<div class="card-header">
									<b>Post id: ${item.id}</b><br>
									<b>${item.title}</b>
							</div>
							<div class="card-body">
									<blockquote class="blockquote mb-0">
									<p>${item.body}</p>
									</blockquote>
									<button class="btn btn-dark user-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" id="authorID-${item.userId}">About author</button>
							</div>
					</div>
					`;
			});
		});
	addModalEvent();
}
render();

function writeAuthorObj(id) {
	let modal = document.querySelector(".modal-body");
	modal.innerHTML = `
		<div class="spinner-border" role="status">
			<span class="visually-hidden">Загрузка...</span>
		</div>
	`;
	fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(res => res.json())
		.then(data => {
			setTimeout(() => {
				modal.innerHTML = `
				<p><b>Author id</b>: ${data.id}</p>
				<p><b>Email id</b>: ${data.email}</p>
				<p><b>Name id</b>: ${data.name}</p>
				<p><b>Username id</b>: ${data.username}</p>
				`;
			},500);
		});
}

function getPostAuthor(e) {
	let authorID = e.target.id.split("-")[1];
	writeAuthorObj(authorID);
	// console.log(authorID);
}

function addModalEvent() {
	setTimeout(() => {
		let authorBtns = document.querySelectorAll(".user-btn");
		authorBtns.forEach(item => item.addEventListener("click", getPostAuthor));
	}, 2000);
}

let prevPage = document.querySelector('#prev-page');
let nextPage = document.querySelector('#next-page');

function checkPages() {
    if(page === 1) {
        prevPage.style.display = 'none'
        nextPage.style.display = 'block'
    } else if (page === 10){
        prevPage.style.display = 'block'
        nextPage.style.display = 'none'
    } else {
        prevPage.style.display = 'block'
        nextPage.style.display = 'block'
    }
};
checkPages();
nextPage.addEventListener('click', ()=> {
	page++
	render()
	checkPages()
})
prevPage.addEventListener('click', ()=> {
	page--
	render()
	checkPages()
})

let homeBtn = document.querySelector('#home-btn')
homeBtn.addEventListener('click', () => {
	page = 1
	render()
	checkPages()
})
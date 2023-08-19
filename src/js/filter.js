const filter = D.querySelector('.js-filter');

const filterOpen = () => {
	filter.classList.add('is-active');
}

const filterClose = () => {
	filter.classList.remove('is-active');
}

D.addEventListener("DOMContentLoaded", function () {
	const openFilter = D.querySelector('.js-open-filter'),
		  closeFilter = D.querySelector('.js-close-filter');

	openFilter.addEventListener('click', (e) =>{
		e.preventDefault();
		filterOpen();
	})

	closeFilter.addEventListener('click', () =>{
		filterClose();
	})
	
})
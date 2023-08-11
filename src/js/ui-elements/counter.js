const plus = (el) => {
	const unit = el.closest('.js-counter');
	const input = unit.querySelector('.js-counter__input');
	let counter = input.value;
	input.value = ++counter;
}

const minus = (el) => {
	const unit = el.closest('.js-counter');
	const input = unit.querySelector('.js-counter__input');
	let counter = input.value;
	if(counter > 1) {
		input.value = --counter;
	}
}

D.addEventListener("DOMContentLoaded", function () {

	const counterPlus = D.querySelectorAll('.js-counter__plus'),
				counterMinus = D.querySelectorAll('.js-counter__minus');

	counterPlus.forEach(item => {
		item.addEventListener('click', () => {
			plus(item);
		})
	})

	counterMinus.forEach(item => {
		item.addEventListener('click', () => {
			minus(item);
		})
	})
	
})
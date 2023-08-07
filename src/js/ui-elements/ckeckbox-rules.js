const validateRules = (elem) => {
	let unit = elem.closest('.js-form'),
			btn = unit.querySelector('.js-form-submit');
		
			if(elem.checked) {
				btn.classList.remove('is-disabled')
			} else {
				btn.classList.add('is-disabled')
			}
}


D.addEventListener("DOMContentLoaded", function () {
		let ckecboxRules = D.querySelectorAll('.js-checkbox-rules');

		ckecboxRules.forEach(current => {
			validateRules(current);

			current.addEventListener('change', () => {
				validateRules(current);
			})

		})
})
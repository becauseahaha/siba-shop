let inp = D.querySelectorAll('.js-input');

const setInputFocused = () => {
	inp.forEach(current => {
		let unit = current.closest('.form-field');
		if (current.value === '') {
			unit.classList.remove('form-field--focused');
		} else {
			unit.classList.add('form-field--focused');
		}
	})
}

D.addEventListener("DOMContentLoaded" ,function(){

	inp.forEach(current => {
		let unit = current.closest('.form-field');

		//focused
		current.addEventListener('focus', function(e){
			unit.classList.remove('form-field--error');
			unit.classList.add('form-field--focused');
		})

		//blur
		current.addEventListener('blur', function(e){
			if (current.value === '') {
				unit.classList.remove('form-field--focused');
			}
		})
	})

	setInputFocused();

})
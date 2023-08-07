let select = document.querySelectorAll(".js-select ");

const selectInit = () => {
	select.forEach(current => {
		let customSelect = new NiceSelect(current, {searchable: false});

		current.addEventListener('change', () => {
			let unit = current.closest('.form-field');

			unit.classList.remove('has-danger');
			unit.querySelector('.form-field__label-select').style.opacity = '0';
		})

	})
}

window.selectInit = selectInit;

D.addEventListener("DOMContentLoaded" ,function(){
	selectInit();
})
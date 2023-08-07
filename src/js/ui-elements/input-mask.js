const validatePhone = (phone) => {
	let phoneNumber = phone.value.replace(/[^\d.]/g, ''),
		minLenght = Number(phone.getAttribute('minlength')),
		phoneUnit = phone.closest('.form-group');

	if (phoneNumber.length === minLenght) {
		phoneUnit.classList.remove('has-danger')
		phoneUnit.classList.add('has-success')
	} else {
		phoneUnit.classList.remove('has-success')
		phoneUnit.classList.add('has-danger')
	}
}

window.validatePhone = validatePhone

D.addEventListener("DOMContentLoaded", function () {
	//phome nask
	// Element constants
	for (const el of document.querySelectorAll("input[data-slots]")) {
		const pattern = el.getAttribute("data-mask"),
			slots = new Set(el.dataset.slots || "_"),
			prev = (j => Array.from(pattern, (c, i) => slots.has(c) ? j = i + 1 : j))(0),
			first = [...pattern].findIndex(c => slots.has(c)),
			accept = new RegExp(el.dataset.accept || "\\d", "g"),
			clean = input => {
				input = input.match(accept) || [];
				return Array.from(pattern, c =>
					input[0] === c || slots.has(c) ? input.shift() || c : c
				);
			},
			format = () => {
				const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
					i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
					return i < 0 ? prev[prev.length - 1] : back ? prev[i - 1] || first : i;
				});
				el.value = clean(el.value).join``;
				el.setSelectionRange(i, j);
				back = false;
			};
		let back = false;
		el.addEventListener("keydown", (e) => back = e.key === "Backspace");
		el.addEventListener("input", format);
		el.addEventListener("focus", format);
		el.addEventListener("blur", () => el.value === pattern && (el.value = ""));
	}
})
D.addEventListener("DOMContentLoaded", function () {

	//validate form
	const forms = D.querySelectorAll(".js-form");

	forms.forEach(current => {
		let pristine = new Pristine(current),
				phoneForm = current.querySelector('.js-phone');

		current.addEventListener('submit', async (e) => {
			e.preventDefault();
			let valid = pristine.validate();


			if(phoneForm) {
				validatePhone(phoneForm)
			}


			if (valid) {
				let urlLink = current.getAttribute('action'),
						method = current.getAttribute('method'),
						urlThank = current.getAttribute('data-thank'),
						urlRedirect = current.getAttribute('data-redirect');
				

				let serializeForm = function (current) {
					let obj = {};
					let formData = new FormData(current);
					for (let key of formData.keys()) {
						obj[key] = formData.get(key);
					}
					return obj;
				};

				// start success test frontend - remove for backand
				current.reset();
				if (urlRedirect) {
					document.location.href = urlRedirect
				} else if(urlThank) {
					let popups = D.querySelectorAll('.js-popup');
					Array.from(popups).forEach(item => {
						item.classList.remove('is-show')
					})
					document.querySelector(urlThank).classList.add('is-show');
					document.querySelector(urlThank).closest('.js-popups-wrapper').classList.add('is-show');
					document.querySelector(urlThank).closest('.js-popups-wrapper').classList.add('popups-wrapper--thank');
				}
				// end success test frontend - remove for backand

				await fetch(urlLink, {
					method: method,
					body: JSON.stringify(serializeForm(event.target)),
					headers: {
						'Content-type': 'application/json; charset=UTF-8'
					}
				}).then(function (response) {
					if (response.ok) {
						console.log('successfully');
						current.reset();
						if (urlRedirect) {
							document.location.href = urlRedirect
						} else if(urlThank) {
							let popups = D.querySelectorAll('.js-popup');
							Array.from(popups).forEach(item => {
								item.classList.remove('is-show')
							})
							document.querySelector(urlThank).classList.add('is-show');
							document.querySelector(urlThank).closest('.js-popups-wrapper').classList.add('is-show');
							document.querySelector(urlThank).closest('.js-popups-wrapper').classList.add('popups-wrapper--thank');
						}
					}
				}).then(function (data) {
					console.log(data);
				}).catch(function (error) {
					console.warn(error);
				});
			}

		});

		if (phoneForm) {
			phoneForm.addEventListener('keyup', function() {
				validatePhone(phoneForm)
			})
		}

	});

});

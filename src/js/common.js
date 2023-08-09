D.addEventListener("DOMContentLoaded", function() {

//fixed header
	const fixedHeader = () => {
		let header = D.querySelector('.js-header');
		let scrollBarPosition = W.pageYOffset | D.body.scrollTop;

		if( scrollBarPosition  > 200) {
			header.classList.add("is-fixed")
		} else {
			header.classList.remove("is-fixed")
		}
	}
	W.addEventListener("scroll", fixedHeader);

	//mobile menu
	const nav = D.querySelector('.js-mobile-menu'),
				openMenu = D.querySelector('.js-open-mobile-menu'),
				closeMenu = D.querySelector('.js-close-mobile-menu');

	const mobileMenu = () => {
		nav.classList.toggle('is-active');
		openMenu.classList.toggle('is-active');
	}

	openMenu.addEventListener('click', mobileMenu);
	closeMenu.addEventListener('click', mobileMenu);

})
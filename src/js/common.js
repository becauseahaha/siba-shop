
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


//tabs
const tabsInit = () => {
	const tabs = D.querySelector(".js-tab"),
			tabButton = D.querySelectorAll(".js-tab__item"),
			contents = D.querySelectorAll(".js-tab__block");

	if(tabButton.length) {
		tabs.onclick = (e) => {
			const id = e.target.dataset.id;
			if (id) {
				tabButton.forEach(btn => {
					btn.classList.remove("is-active");
				});
				e.target.classList.add("is-active");
	
				contents.forEach(content => {
					content.classList.remove("is-active");
				});
				const element = D.getElementById(id);
				element.classList.add("is-active");
			}
		}
	}
}


D.addEventListener("DOMContentLoaded", function() {

	fixedHeader();
	W.addEventListener("scroll", fixedHeader);
	tabsInit()

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
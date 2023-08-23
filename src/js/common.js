
const header = D.querySelector('.js-header');
//fixed header
const fixedHeader = () => {
	
	let scrollBarPosition = W.pageYOffset | D.body.scrollTop;

	if( scrollBarPosition  > 200) {
		header.classList.add("is-fixed")
	} else {
		header.classList.remove("is-fixed")
	}
}


const hideCityBlock = () => {
	D.querySelector('.js-city-block').classList.remove('is-active');
	D.querySelector('.js-city').classList.remove('is-active');
	header.classList.remove('is-active');
}
//mobile menu
const nav = D.querySelector('.js-mobile-menu'),
	openMenu = D.querySelector('.js-open-mobile-menu'),
	closeMenu = D.querySelector('.js-close-mobile-menu');

const mobileMenu = () => {
	nav.classList.toggle('is-active');
	openMenu.classList.toggle('is-active');
	D.querySelector('.js-menu-catalog').classList.remove('is-active');
	hideCityBlock();
	
}

//tabs
const tabsInit = () => {

	const tabs = D.querySelectorAll(".js-tab");

	if (!tabs) return;

	tabs.forEach((el) => {

		const tabButtons = el.querySelectorAll(".js-tab__item"),
			  contents   = el.querySelectorAll(".js-tab__block");

		if (!tabButtons) return;
		if (!contents)   return;

		tabButtons.forEach((tab) => {
			tab.addEventListener('click', (e) => {

				const id = e.target.dataset.id;

				if (id) {
					tabButtons.forEach(btn => {
						btn.classList.remove("is-active");
					});
					e.target.classList.add("is-active");
		
					contents.forEach(content => {
						content.classList.remove("is-active");
					});
					const element = D.getElementById(id);
					element.classList.add("is-active");

					// Additional logic for product card buy also slider
					let matches = id.match(/buy-also-(\d+)/);
					if (matches) {
						D.querySelectorAll('.products-horizontal__slider-navigation').forEach((nav) => {
							nav.classList.remove('is-active');
						})
						if (D.getElementById('slider-nav-buy-also-'+matches[1])) {
							D.getElementById('slider-nav-buy-also-'+matches[1]).classList.add('is-active');
						}
					}

				}
			})
		})
	})
}


//catalog-menu show/hide
const catalogMenu = () => {
	const items = D.querySelectorAll('.js-catalog-menu__item'),
				contents = D.querySelectorAll(".js-catalog-menu__block"),
				itemMobile = D.querySelectorAll('.js-catalog-menu__mobile'),
				catalog = D.querySelector('.js-menu-catalog'),
				openCatalog = D.querySelectorAll('.js-open-catalog');
	
	openCatalog.forEach(cur => {
		cur.addEventListener('click', (e) => {
			e.preventDefault()
			catalog.classList.toggle('is-active');
			cur.classList.toggle('is-active');
			header.classList.toggle('is-active');
			nav.classList.remove('is-active');
			hideCityBlock();
		})
	})
	

	items.forEach(el => {
		el.addEventListener('mouseenter', () => {
			const id = el.dataset.id;
			contents.forEach(content => {
				content.classList.remove("is-active");
			});
			D.getElementById(id).classList.add("is-active");

			items.forEach(btn => {
				btn.classList.remove("is-active");
			});
			el.classList.add("is-active");
		})
	})

	itemMobile.forEach(el => {
		el.addEventListener('click', () => {
			let unit = el.closest('.js-catalog-menu__block');

			el.classList.toggle('is-active');
			unit.querySelector('.js-catalog-menu__mobile-content').classList.toggle('is-active');
		})
	})

}


//searh list show-hide 
const search = () => {
	const openSearch = D.querySelectorAll('.js-open-search'),
			listSearch = D.querySelector('.js-list-search'),
			closeSearch = D.querySelectorAll('.js-close-search');

			openSearch.forEach(el => {
				el.addEventListener('keyup', () =>{
					let val = el.value.length;
					if (val >= 3) {
						listSearch.classList.add('is-active')
						header.classList.add('is-active');
						el.closest('.js-search-unit').classList.add('is-active');
					} else {
						listSearch.classList.remove('is-active')
						header.classList.remove('is-active');

						let unit = el.closest('.js-search-unit');
						unit.classList.remove('is-active');
					}
				})
			})

			closeSearch.forEach(current => {
				current.addEventListener('click', (e) => {
					e.preventDefault();
					listSearch.classList.remove('is-active')
					header.classList.remove('is-active');

					let unit = current.closest('.js-search-unit');
					unit.classList.remove('is-active');
					unit.reset();
				})
			})

}

//city 
const city = () => {
	let city = D.querySelectorAll('.js-city'),
			cityBlock = D.querySelector('.js-city-block'),
			itemCityUnit = D.querySelectorAll('.js-city-item'),
			itemCity = D.querySelectorAll('.js-city-item__link'),
			itemName = D.querySelectorAll('.js-city__value');

	city.forEach(el => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			cityBlock.classList.toggle('is-active');
			window.scroll({top: 0, left: 0});
			el.classList.toggle('is-active');
		})
	})

	itemCity.forEach(el => {
		el.addEventListener('click', (e) => {
			e.preventDefault();

			let unit = el.closest('.js-city-item'),
					val = unit.querySelector('.js-city-item__value').textContent;

					itemCityUnit.forEach(current => {
						current.classList.remove('is-active');
					})
					unit.classList.add('is-active');
					itemName.forEach(nameActive => {
						nameActive.innerText = val;
					})
					cityBlock.classList.remove('is-active');
					city.forEach(cityActive => {
						cityActive.classList.remove('is-active');
					})
					
		})
	})

}

const bindShowHide = () => {
	D.querySelectorAll('.js-show-hide').forEach((el) => {
		el.addEventListener('click', () => {
			console.log(el)
			let target = el.dataset.target;
			if (D.getElementById(target)) {
				D.getElementById(target).classList.remove('is-hidden');
				el.remove();
			}
		})
	})
}

D.addEventListener("DOMContentLoaded", function() {

	fixedHeader();
	W.addEventListener("scroll", fixedHeader);
	catalogMenu();
	tabsInit();
	search();
	city();
	bindShowHide();

	openMenu.addEventListener('click', mobileMenu);
	closeMenu.addEventListener('click', mobileMenu);

})

// let repairItems = document.querySelectorAll('.repair-item')
// repairItems.forEach(function (item) {
//   item.querySelector(".repair-item__add").onclick = function () {
//     item
//       .querySelector(".repair-item__counter")
//       .classList.toggle("is-show");
// 		this.classList.add('is-hidden')
//   };
// });

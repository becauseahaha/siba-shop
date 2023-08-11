D.addEventListener("DOMContentLoaded", function () {

	//main slider 
	const slider = D.querySelectorAll('.js-slider');
	slider.forEach(el => {
		const swiper = new Swiper(el, {
			slidesPerView: 2,
			spaceBetween: 0,
			speed: 900,
			simulateTouch: false,
			navigation: {
				nextEl: ".js-slider__next",
				prevEl: ".js-slider__prev",
			},
			breakpoints: {
				800: {
					slidesPerView: 3,
					spaceBetween: 20,
					simulateTouch: true,
				},
				1000: {
					slidesPerView: 4,
					spaceBetween: 20,
					simulateTouch: true,
				},
				1300: {
					slidesPerView: 5,
					spaceBetween: 20,
					simulateTouch: true,
				}
			}
		});
	})

	//product slider 
	const productSlider = D.querySelectorAll('.js-product-slider');
	productSlider.forEach(el => {
		const swiper = new Swiper(el, {
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 400,
			effect: "creative",
			creativeEffect: {
				prev: {
					shadow: false,
					translate: [0, 0, -800],
					rotate: [180, 0, 0],
				},
				next: {
					shadow: false,
					translate: [0, 0, -800],
					rotate: [-180, 0, 0],
				},
			},
			navigation: {
				nextEl: ".js-product-slider__next",
				prevEl: ".js-product-slider__prev",
			},
		});
	})

	productSlider.forEach(current => {
		const countSlide = current.querySelectorAll('.product__slide').length;

		if (countSlide <= 1) {
			current.querySelector('.js-product-slider__next').classList.add('is-hide')
			current.querySelector('.js-product-slider__prev').classList.add('is-hide')
		}
	})

});
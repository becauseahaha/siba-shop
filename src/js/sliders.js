D.addEventListener("DOMContentLoaded", function () {

	//banner slider 
	const bannerSlider = D.querySelectorAll('.js-banner');
	bannerSlider.forEach(el => {
		const swiper = new Swiper(el, {
			slidesPerView: 1,
			spaceBetween: 10,
			speed: 600,
			autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
			effect: "creative",
      creativeEffect: {
        prev: {
          shadow: false,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
			pagination: {
				el: '.js-banner__pagination',
				clickable: true,
			}
		});
	})

	
//banner slider 
	const bannerSl = D.querySelectorAll('.js-banner-sl');
	bannerSl.forEach(el => {
		const swiper = new Swiper(el, {
			slidesPerView: 1,
			spaceBetween: 0,
			effect: "fade",
			speed: 700,
			effect: "creative",
      creativeEffect: {
        prev: {
          shadow: false,
          translate: ["-80%", 0, -500],
        },
        next: {
          shadow: false,
          translate: ["80%", 0, -500],
        },
      },
			navigation: {
				nextEl: ".js-banner-sl__next",
				prevEl: ".js-banner-sl__prev",
			},
		});
	})


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

		//banner slider 
		const videoSlider = D.querySelectorAll('.js-video-slider');
		videoSlider.forEach(el => {
			const swiper = new Swiper(el, {
				slidesPerView: 1,
				spaceBetween: 10,
				speed: 600,
				navigation: {
					nextEl: ".js-video-slider__next",
					prevEl: ".js-video-slider__prev",
				},
			});
		})

//news slider
	const newsSlider = D.querySelectorAll('.js-news-slider');
	newsSlider.forEach(el => {
		const swiper = new Swiper(el, {
			slidesPerView: 1,
			spaceBetween: 15,
			speed: 900,
			navigation: {
				nextEl: ".js-news-slider__next",
				prevEl: ".js-news-slider__prev",
			},
			breakpoints: {
				650: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1000: {
					slidesPerView: 3,
					spaceBetween: 20,
				}
			}
		});
	})
});
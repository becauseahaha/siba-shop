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

	// product card page main slider 
	const swiper_product_card = new Swiper('#js-slider-product-card', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 900
	});
	swiper_product_card.on('activeIndexChange', function (data) {
		productCardUpdatePagination(data.activeIndex);
	});
	document.querySelectorAll('#js-slider-product-card-controls button').forEach(el => {
		el.addEventListener('click', function() {
			swiper_product_card.slideTo(this.dataset.slide);
		})
	})
	function productCardUpdatePagination(index = 0)
	{
		document.querySelectorAll('#js-slider-product-card-controls button').forEach(el => {
			el.classList.remove('is-active');
			if (el.dataset.slide == index) {
				el.classList.add('is-active');
			}
		})
	}
	// ---

	//main slider horizontal
	const slider_horizontal = D.querySelectorAll('.js-slider-horizontal');
	slider_horizontal.forEach(el => {

		const navId = el.dataset.navigation;

		const swiper = new Swiper(el, {
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 900,
			simulateTouch: true,
			navigation: {
				nextEl: "#" + navId + " .js-slider__next",
				prevEl: "#" + navId + " .js-slider__prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					simulateTouch: true,
					spaceBetween: 10,
					grid: {
						rows: 99
					}
				},
				481: {
					slidesPerView: 1,
					simulateTouch: true,
					grid: {
						rows: 1
					}
				},
				768: {
					slidesPerView: 2,
					simulateTouch: true
				},
				1280: {
					slidesPerView: 3,
					simulateTouch: false
				}
			}
		});
	})

	//product slider 
	// const productSlider = D.querySelectorAll('.js-product-slider');
	// productSlider.forEach(el => {
	// 	const swiper = new Swiper(el, {
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		speed: 400,
	// 		effect: "creative",
	// 		creativeEffect: {
	// 			prev: {
	// 				shadow: false,
	// 				translate: [0, 0, -800],
	// 				rotate: [180, 0, 0],
	// 			},
	// 			next: {
	// 				shadow: false,
	// 				translate: [0, 0, -800],
	// 				rotate: [-180, 0, 0],
	// 			},
	// 		},
	// 		navigation: {
	// 			nextEl: ".js-product-slider__next",
	// 			prevEl: ".js-product-slider__prev",
	// 		},
	// 	});
	// })

	// productSlider.forEach(current => {
	// 	const countSlide = current.querySelectorAll('.product__slide').length;

	// 	if (countSlide <= 1) {
	// 		current.querySelector('.js-product-slider__next').classList.add('is-hide')
	// 		current.querySelector('.js-product-slider__prev').classList.add('is-hide')
	// 	}
	// })

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
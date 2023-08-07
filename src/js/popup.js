D.addEventListener("DOMContentLoaded", function() { 

	let popupLink = D.querySelectorAll('.js-popup-link'),
		popups = D.querySelectorAll('.js-popup'),
		popupsWrapper = D.querySelector('.js-popups-wrapper'),
		popupClose = D.querySelectorAll('.js-popup-close'),
		lastOpenedPopup = null;


	if (location.hash !== '') {
		let activePopupLoad = location.hash.substr(1);
		popupsWrapper.classList.add('is-show');
		getEventItem(activePopupLoad, elem)
		D.querySelector('.js-popup[data-block="'+target+'"]');
  }

	popupLink.forEach(current => {
		current.addEventListener('click', function(e){
			e.preventDefault();
			let activePopup = current.dataset.link;
			let href = current.dataset.href;
			let videoSrc = current.dataset.src;
			
			openPopup(activePopup, href, videoSrc);
		})
	})

	function openPopup(target, href, videoSrc){

		popupsWrapper.classList.add('is-show');
		const elem = D.querySelector('.js-popup[data-block="'+target+'"]');
		
		Array.from(popups).forEach(item => {
			item.classList.remove('is-show')
		})
		elem.classList.add('is-show');

		let video = elem.querySelector('.js-iframe');

		if (href) {
			history.pushState({}, '', href);
			getEventItem(href,elem);
			lastOpenedPopup = 'href';
			popupsWrapper.classList.add('popups-wrapper--fetch');
		} else if (video) {
			video.setAttribute('src', videoSrc);
			popupsWrapper.classList.add('popups-wrapper--video')
		}
			
	}

	popupClose.forEach(current =>{
		current.addEventListener('click', function(e){
			Array.from(popups).forEach(item => {
				item.classList.remove('is-show')
			})
			popupsWrapper.classList.remove('is-show');
			popupsWrapper.classList.remove('popups-wrapper--fetch');
			popupsWrapper.classList.remove('popups-wrapper--video');
			popupsWrapper.classList.remove('popups-wrapper--thank');
			D.querySelector('.js-fetch-wrapper').innerHTML = '';
			let iframeVideo = D.querySelector('.js-iframe');

			if(iframeVideo ) {
				iframeVideo.setAttribute('src', '');
			}

			if (lastOpenedPopup === 'href') {
	            history.back();
	            lastOpenedPopup = null;
	        }
		})

	})

	function getEventItem(item, elem) {
		let promise = fetch(item, {
			method: "GET"
		}).then(function(response){
			if (response.ok) {
				console.log('successfully');
				return response.text();
			}
		}).then(function (html) {
			let contentWrapper = elem.querySelector('.js-fetch-wrapper');
			contentWrapper.innerHTML = html;
		}).catch(function (error) {
			console.warn(error);
		});
	}
	
})
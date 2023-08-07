D.addEventListener("DOMContentLoaded" ,function(){

	let btns = document.querySelectorAll(".btn");

	btns.forEach((current) => {

		let btnShadow = current.querySelector(".btn__shadow");

		current.addEventListener('mousemove', (event) => {
			btnShadow.classList.add("is-active");

			btnShadow.style.transform = `translate3d( ${(event.pageX - current.offsetLeft - 35)+"px"} , ${(event.pageY - current.offsetTop - 15)+"px"}, 0`;
			
		});

		current.addEventListener('mouseout', (event) => {
			btnShadow.classList.remove("is-active");
		});
  });

})
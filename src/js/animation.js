document.addEventListener("DOMContentLoaded", function(){
  gsap.registerPlugin(ScrollTrigger);

  let aboutHero = document.querySelector('.about-hero');
  let maskHolder = document.querySelector('.about-hero__mask');
  let aboutHeroVideo = document.querySelector('.about-hero__video');
  let aboutHeroPoster = document.querySelector('.about-hero__poster');
  let aboutHeroTitle = document.querySelectorAll('.about-hero__title span')
  console.log(aboutHeroVideo)


  if(aboutHero) {
    gsap.to(aboutHeroTitle,{
      x: 0,
      scrollTrigger: {
        trigger: aboutHero,
        scrub: true,
        start: () => "top top",
        end: () => "bottom top",
      }
    })

    let animateIn = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-hero',
        scrub: true,
        pin: true,
        start: () => "top top",
        end: () => "bottom top",
        onEnter: () => {
          aboutHeroVideo.play();
          aboutHeroPoster.classList.add('is-hidden')
          console.log('213');
        },
      }
    });

    animateIn.fromTo(maskHolder, 
      { "clip-path": "inset(47% 0%)", alpha: 1 }, 
      { alpha: 1, "clip-path":  "inset(0% 0%)", delay: 0 }
    );

  }
})
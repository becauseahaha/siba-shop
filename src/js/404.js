const noFoundPage = () => { 
    
    function parallax(e) {

        let position, x, y;
        
        D.querySelectorAll(".js-parallax").forEach((el) => {
            
            position = el.dataset.prlx;
            x = (window.innerWidth - e.pageX * position) / 190;
            y = (window.innerHeight - e.pageY * position) / 190;
            
            el.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    D.addEventListener("mousemove", parallax);
}

D.addEventListener("DOMContentLoaded", function() {
    noFoundPage();
});
HTMLImageElement.prototype.zoomer = function(magnification, magnifierSize) {
  var imgTarget = this,
    targetStyle = imgTarget.style,
    creeLoupe = function(e) {
      var bodyElt = document.body,
        loupe = bodyElt.appendChild( document.createElement('div') ),
        styleLoupe = loupe.style,
        bBox = imgTarget.getBoundingClientRect(),     
        imagePos = {
            top: bBox.top + bodyElt.scrollTop,
            left: bBox.left + bodyElt.scrollLeft
        },
        magnifyOffset = parseInt( magnifierSize ) / 2,
        [ rightSide, bottomSide ] = [ +(imagePos.left + imgTarget.width), +(imagePos.top + imgTarget.height) ],
        moveLoupe = function(e) {

          if ( e.pageX < +(imagePos.left - magnifyOffset / 2) 
            || e.pageX > +(rightSide + magnifyOffset / 2) 
            || e.pageY < +(imagePos.top - magnifyOffset / 2) 
            || e.pageY > +(bottomSide + magnifyOffset / 2)) {
            bodyElt.removeChild( loupe );
            document.removeEventListener('mousemove', moveLoupe);
          } else {
            [styleLoupe.left, styleLoupe.top] = [e.pageX, e.pageY].map( n => `${n - magnifyOffset}px` );
            styleLoupe.backgroundPosition = [e.pageX - imagePos.left, e.pageY - imagePos.top].map( x => `${ -x * magnification + magnifyOffset / 2 }px` ).join(' ');
          }
        };
      
      loupe.classList.add('magnify');
      
      styleLoupe.backgroundSize = [imgTarget.width, imgTarget.height].map( x => `${x * magnification}px` ).join(' ');
      styleLoupe.backgroundImage = `url(${imgTarget.src})`;
      [styleLoupe.width, styleLoupe.height] = [magnifierSize, magnifierSize];

      document.addEventListener('mousemove', moveLoupe);

      return loupe;
    };
  
  this.addEventListener('mouseover', creeLoupe);
  
  return this;
}

window.addEventListener( 'load', e => document.querySelector('.magnify-img').zoomer( 2, '180px' ) );

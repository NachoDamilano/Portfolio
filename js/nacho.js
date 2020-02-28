$(document).ready(function() {

function animateCSS(element, animationName, callback) {
    var node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

  $(".text-hate").click(function(){
    var element =  document.querySelector('.div-hate')
    element.classList.add('animated','fadeOut')
    element.addEventListener('animationend', function(){ 
     
     $(".new-text").removeClass("sr-only")
     $(".text-hate").addClass("sr-only")
     animateCSS(".new-text","fadeIn")
     })

  });


});
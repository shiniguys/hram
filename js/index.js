// lazysizes
document.addEventListener('lazyloaded', function(e) {
    var el = e.target;

    if (!el.dataset.bg) {
        el.parentNode.parentNode.classList.add('is-loaded');
    }
});

document.addEventListener('lazybeforeunveil', function(e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
        if (bg == "css") {
            e.target.classList.add("is-load");
        } else {
            e.target.style.backgroundImage = 'url(' + bg + ')';
        }
    }
});


document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.header-menu').classList.toggle('active');
    document.body.classList.toggle('hidden');
  });
  document.querySelector('.burger_close').addEventListener('click', function(){
    document.querySelector('.burger span').classList.remove('active');
    document.querySelector('.header-menu').classList.remove('active');
    document.body.classList.remove('hidden');
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    var slider = new SimpleAdaptiveSlider('.slider', {
      autoplay: true,
      interval: 10000,
    });
  });
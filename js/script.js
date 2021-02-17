// <Slick slider>

$(document).ready(function(){
  $('.slider').slick({
    dots: true,
  });
});

// </Slick slider>
// =================================================================================

// <События при изменении окна браузера 2 вариант>
const mediaQuery = window.matchMedia('(max-width: 1023px)');

function adaptiveFunction(e) {

    let headerRow = document.querySelector('.menu-header__row');
    let topHeader = document.querySelector('.top-header');
    let menuBody = document.querySelector('.menu-header__body');
    let searchForm = document.querySelector('.menu-header__search');
   //  let searchFormback = document.querySelector('.menu-header__search');

    if (e.matches) {
        if(!menuBody.classList.contains('done')) {
            topHeader.insertAdjacentElement('afterbegin', menuBody);
            menuBody.classList.add('done');
            if(!searchForm.classList.contains('done')) {
              menuBody.insertAdjacentElement('afterbegin', searchForm);
              searchForm.classList.add('done');
            }
        }
    } else {
        if(menuBody.classList.contains('done')) {
            headerRow.insertAdjacentElement('afterbegin', menuBody);
            menuBody.classList.remove('done');
            if(searchForm.classList.contains('done')) {
              headerRow.insertAdjacentElement('beforeend', searchForm);
              searchForm.classList.remove('done');
             }
        }
    }
}
adaptiveFunction(mediaQuery);
mediaQuery.addEventListener('change', adaptiveFunction);
// </События при изменении окна браузера>
// =================================================================================

// <Меню бургер>
const body =  document.querySelector('body');
const btnBurger = document.querySelector('.menu-header__burger');
const menu =  document.querySelector('.menu-header__body');

const toggleMenu = function() {
    menu.classList.toggle('open');
}
const toggleBurger = function() {
    btnBurger.classList.toggle('active');
}
btnBurger.addEventListener('click', function(e) {
   e.stopPropagation();
   toggleBurger();
   toggleMenu();
   body.classList.toggle('lock');
   
});
// </Меню бургер>

// =================================================================================

  /*  Javascript filter
---------------------------------*/
// animate divs on start
const items = document.querySelectorAll("div.filter-sections__column");
animate(items);

// filter on click
each('.filter-link', function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    filterLinks(el);
  });
});

// filter links functions
function filterLinks(element) {
  each('.filter-link_active', function(e) {
    e.classList.remove('filter-link_active');
  });
  element.classList.add('filter-link_active');
  // get text 
  let el = element.dataset.value,
    // convert to lowercase
    linksTolowerCase = el.toLowerCase();
  // if all remove all elements
  if (el === 'all') {
    // first show all view class
    each('.view', function(e) {
      e.classList.remove('view');
    });
    // no show init animation
    animate(items);
  } else {
    // if not click all remove all elements
    each('.view', function(e) {
      e.classList.remove('view');
    });
    // show animation for current elements
    animate(document.querySelectorAll('.' + linksTolowerCase));
  }
};
// forech arrays
function each(el, callback) {
  let allDivs = document.querySelectorAll(el),
    alltoArr = Array.prototype.slice.call(allDivs);
  Array.prototype.forEach.call(alltoArr, function(selector, index) {
    if (callback) return callback(selector);
  });
};
// animate function
function animate(item) {
  (function show(counter) {
    setTimeout(function() {
      item[counter].classList.add('view');
      counter++;
      if (counter < item.length) show(counter);
    },50);
  })(0);
};

// =================================================================================

// <Картинка (img) в фон (background-image)>
function ibg() {
  let ibg = document.querySelectorAll('.ibg');

  for (i=0; i<ibg.length; i++) {
      if(ibg[i].querySelector('img')) {
          ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }          
  }
}
ibg();
// </Картинка (img) в фон (background-image)>

// =================================================================================

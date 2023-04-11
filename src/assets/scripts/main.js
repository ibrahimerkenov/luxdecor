var swiperHeader = new Swiper('.slider-header', {
  loop: true,
  navigation: {
    nextEl: '.slider-header__next',
    prevEl: '.slider-header__prev',
  },
  pagination: {
    el: '.slider-header__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    }
  }
});

var swiperBestsellers = new Swiper('.bestsellers-slider', {
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: '.bestsellers-slider__next',
    prevEl: '.bestsellers-slider__prev',
  }
});

var swiperStocks = new Swiper('.stock-slider', {
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: '.stock-slider__next',
    prevEl: '.stock-slider__prev',
  }
});
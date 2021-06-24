$(document).ready(function() {
  window.$('.center').slick({
    centerMode: true,
    autoplaySpeed: 1500,
    autoplay: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.btn-counter').on('click', function (event, count) {
    event.preventDefault();

    var $this = $(this),
      count = $this.attr('data-count'),
      active = $this.hasClass('active'),
      multiple = $this.hasClass('multiple-count');

    $.fn.noop = $.noop;
    $this.attr('data-count', !active || multiple ? ++count : --count)[multiple ? 'noop' : 'toggleClass']('active');

  });
});

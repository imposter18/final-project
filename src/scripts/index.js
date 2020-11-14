$(document).on('DOMContentLoaded', () => {

  $('.mainSlider').on('afterChange', function(event, slick, currentSlide) {
    $('.headerBlack').removeClass('headerWWW').eq(currentSlide).addClass('headerWWW');
  });

    $('.mainSlider').slick({
    prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });
    $('.productCard__slider__one-main').slick({
      slidesToShow: 1,
      fade: true,
      centerMode: false,
      arrows: false, 
     
    });
    $('.productCard__slider__one-support').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.productCard__slider__one-main',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: false,  
    });
    $('#group input:checkbox').click(function(){
      if ($(this).is(':checked')) {
         $('#group input:checkbox').not(this).prop('checked', false);
      }
    });
    $('#group-checkbox input:checkbox').click(function(){
      if ($(this).is(':checked')) {
         $('#group-checkbox input:checkbox').not(this).prop('checked', false);
      }
    });
    $('.productCard__slider__two-slick').slick({
      prevArrow: $('.productCard__prev'),
      nextArrow: $('.productCard__next'),
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        }
      ]
    });
});
  
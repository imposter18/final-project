$(document).on('DOMContentLoaded', () => {
    $('.mainSlider').slick({
    prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });
    $('.productCard__slider__one-main').slick({
      slidesToShow: 1,
      // prevArrow: $('.prev'),
      // nextArrow: $('.next'),
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
});
  
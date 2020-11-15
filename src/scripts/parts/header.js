export default function headerTheme(){
$('.mainSlider').on('afterChange', function(event, slick, currentSlide) {
    $('.headerBlack').removeClass('headerWWW').eq(currentSlide).addClass('headerWWW');
  });
}
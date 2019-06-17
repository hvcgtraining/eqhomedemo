$('.slide-content').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
          }
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
          }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: false,
            }
          }
      ]
});

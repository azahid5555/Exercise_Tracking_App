$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel.herocarousel");
  owl.owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    animateOut: "fadeOutDown",
    animateIn: "fadeInDown",
  });
});

$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel.whyusCarousel");
  owl.owlCarousel({
    dots: false,
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    animateOut: "fadeOutDown",
    animateIn: "fadeInDown",
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel.coachseCarousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 450,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  // Owl Carousel
  var owl = $(".owl-carousel.testimonialCarousel");
  owl.owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});

let gameSlider = new Swiper(".games-nav", {
  slidesPerView: 2,
  spaceBetween: 0,
  // loop: true,
  // speed: 8000,
  // autoplay: {
  //   delay: 0,
  // },
  navigation: {
    nextEl: ".other-games__next",
    prevEl: ".other-games__prev",
  },

});

  const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined)
          slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      let roadSlider = new Swiper(".roadmap-section__box", {
        slidesPerView: 4,
        spaceBetween: 70,
        navigation: {
          nextEl: ".roadmap-section__prev",
          prevEl: ".roadmap-section__next"
        },
        breakpoints: {
          320: {
            slidesPerView: "auto",
            spaceBetween: 20,
            centeredSlides: true,
          },

          575: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: false,
          },

          767: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: false,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 70,
            centeredSlides: false,
          },

          1240: {
            slidesPerView: 4,
            spaceBetween: 70,
            centeredSlides: false,
          },
        },
    });


// init sliders

// (function () {
//   "use strict";
//   const breakpoint = window.matchMedia("(min-width:1024px)");
//   let slider;

//   const breakpointChecker = function () {
//     if (breakpoint.matches === true) {
//       if (slider !== undefined)
//       slider.destroy(true, true);

//       return;
//     } else if (breakpoint.matches === false) {
//       return enableSwiper();
//     }
//   };
//   const enableSwiper = function () {
//     slider = new Swiper(".index-logo__slider", {
//       slidesPerView: 'auto',
//       spaceBetween: 70,
//       loop: true,
//       speed: 8000,
//       autoplay: {
//         delay: 0,
//       },
//       // pagination: {
//       //   el: ".swiper-pagination",
//       // },
//       // breakpoints: {
//       //   320: {
//       //     slidesPerView: 3,
//       //     spaceBetween: 10,
//       //   },
//       //   576: {
//       //     slidesPerView: 4,
//       //     spaceBetween: 15,
//       //   },
//       //   768: {
//       //     slidesPerView: 5,
//       //     spaceBetween: 15,
//       //   },
//       // },
//     });
//   };

//   breakpoint.addListener(breakpointChecker);
//   breakpointChecker();
// })();

// закрытие по клику вне окна
// if (overlay) {
//   overlay.addEventListener('click', function(e) {
//     e.stopPropagation();
//     let curentTargetWrapper = document.querySelector('.modal-wrapper')
//     if (event.target === curentTargetWrapper) {
//       overlay.classList.remove('active');
//     }
//   })
// }
// // закрытие по Escape
// document.addEventListener('keydown', function(e) {
// 	if( e.keyCode == 27 ){
// 		overlay.classList.remove('active');
// 	}
// });

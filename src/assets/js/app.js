// import bootstrap from 'bootstrap'

// var multipleCardCarousel = document.querySelector(
//     "#carouselExampleControls"
// );
// if (window.matchMedia("(min-width: 768px)").matches) {
//     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//         interval: false,
//     });
//     var carouselWidth = document.querySelector(
//         ".carousel-inner"
//     ).scrollWidth;
//     var cardWidth = document.querySelector(
//         ".carousel-item"
//     ).clientWidth;
//     var scrollPosition = 0;
//     document.querySelector(
//         "#carouselExampleControls .carousel-control-next"
//     ).addEventListener("click", function() {
//         console.log("next")
//         if (scrollPosition < carouselWidth - cardWidth * 4) {
//             scrollPosition += cardWidth;
//             document.querySelector(
//                 "#carouselExampleControls .carousel-inner"
//             ).scroll({
//                 left: scrollPosition,
//                 behavior: 'smooth'
//             })
//         }
//     });
//     document.querySelector(
//             "#carouselExampleControls .carousel-control-prev"
//         )
//         .addEventListener("click", function() {
//             console.log("prev")
//             if (scrollPosition > 0) {
//                 scrollPosition -= cardWidth;
//                 document.querySelector(
//                     "#carouselExampleControls .carousel-inner"
//                 ).scroll({
//                     left: scrollPosition,
//                     behavior: 'smooth'
//                 })
//             }
//         });
// } else {
//     multipleCardCarousel.classList.add("slide");
// }
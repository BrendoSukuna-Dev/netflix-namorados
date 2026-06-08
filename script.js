// Seleciona todos os carrosséis com a classe .swiper na página
const carrosseis = document.querySelectorAll(".swiper");

// Inicializa o Swiper para cada um deles separadamente
carrosseis.forEach((carrossel) => {
  new Swiper(carrossel, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,

    // O bloco 'autoplay' foi removido daqui para parar a rolagem automática!

    breakpoints: {
      600: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});

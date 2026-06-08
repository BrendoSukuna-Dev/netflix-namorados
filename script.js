// Seleciona todos os carrosséis com a classe .swiper na página
const carrosseis = document.querySelectorAll(".swiper");

// Inicializa o Swiper para cada um deles separadamente
carrosseis.forEach((carrossel) => {
  new Swiper(carrossel, {
    loop: false, // Desativado para evitar os pulos e bugs de clonagem
    slidesPerView: 2,
    spaceBetween: 10,
    grabCursor: true, // Transforma a setinha do mouse em uma "mãozinha" de arrastar
    resistanceRatio: 0.5, // Deixa o efeito elástico no final do carrossel mais suave

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

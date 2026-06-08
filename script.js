// Seleciona todos os carrosséis com a classe .swiper na página
const carrosseis = document.querySelectorAll(".swiper");

// Inicializa o Swiper para cada um deles separadamente
carrosseis.forEach((carrossel) => {
  new Swiper(carrossel, {
    loop: false, // Mantém falso para não dar aqueles pulos doidos
    slidesPerView: "auto", // IMPORTANTE: Permite que as fotos tenham tamanho fluido
    spaceBetween: 15, // Espaço entre as fotos
    grabCursor: true, // Adiciona a mãozinha de arrastar

    // Libera o arrasto livre estilo linha do tempo (sem travar de foto em foto)
    freeMode: {
      enabled: true,
      sticky: false,
      momentumBounce: true,
    },

    // CRUCIAL: Adiciona um espaço extra no início e no fim de cada carrossel
    // Isso permite que você arraste até a última foto sair da borda da tela!
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 100, // Margem de segurança na direita para o fim do arrasto
  });
});

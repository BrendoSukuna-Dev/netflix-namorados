// Seleciona todos os carrosséis com a classe .swiper na página
const carrosseis = document.querySelectorAll(".swiper");

// Inicializa o Swiper para cada um deles separadamente
carrosseis.forEach((carrossel) => {
  new Swiper(carrossel, {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 15,
    grabCursor: true,
    watchSlidesProgress: true,

    freeMode: {
      enabled: true,
      sticky: false,
      momentumBounce: true,
    },

    slidesOffsetBefore: 20,
    slidesOffsetAfter: 100,

    // ====== EVENTO DE CLIQUE DO SWIPER (Evita bloqueios de arrasto) ======
    on: {
      click: function (swiper, event) {
        // Verifica se o clique foi especificamente em uma imagem do slide
        const imagemClicada = event.target.closest(".swiper-slide img");

        if (imagemClicada) {
          const lightbox = document.getElementById("lightbox");
          const lightboxImg = document.getElementById("lightbox-img");

          if (lightbox && lightboxImg) {
            lightboxImg.src = imagemClicada.src; // Passa o caminho da foto para o lightbox
            lightbox.style.display = "flex"; // Ativa o container

            // Pequeno delay para a animação de transição funcionar
            setTimeout(() => {
              lightbox.classList.add("ativo");
            }, 10);
          }
        }
      },
    },
  });
});

// Função responsável por fechar a imagem
function fecharFoto() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("ativo");
    setTimeout(() => {
      lightbox.style.display = "none";
    }, 300); // Tempo batendo com o transition do CSS
  }
}

// Vincula o fechamento ao clicar no fundo ou no botão X
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.addEventListener("click", fecharFoto);
  }
});

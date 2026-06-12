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

    // ====== EVENTO DE CLIQUE DO SWIPER ======
    on: {
      click: function (swiper, event) {
        // Evita que o navegador execute cliques duplicados no celular
        event.preventDefault();

        // Verifica se o clique foi na imagem
        const imagemClicada = event.target.closest(".swiper-slide img");

        if (imagemClicada) {
          const lightbox = document.getElementById("lightbox");
          const lightboxImg = document.getElementById("lightbox-img");

          if (lightbox && lightboxImg) {
            lightboxImg.src = imagemClicada.src;
            lightbox.style.display = "flex";

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
    }, 300);
  }
}

// Vincula o fechamento de forma segura
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const botaoFechar = document.querySelector(".lightbox-fechar");

  if (lightbox) {
    // No celular, fechar ao tocar no fundo ou no botão sem dar conflito
    lightbox.addEventListener("click", (e) => {
      // SÓ FECHA se clicar no fundo preto ou no botão X (impede fechar clicando na própria foto)
      if (
        e.target === lightbox ||
        e.target === botaoFechar ||
        e.target.classList.contains("lightbox-fechar")
      ) {
        fecharFoto();
      }
    });
  }
});

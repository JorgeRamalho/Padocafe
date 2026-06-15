(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
        nav.classList.remove("is-open");
      });
    });
  }

  const ano = document.getElementById("ano");
  if (ano) {
    ano.textContent = String(new Date().getFullYear());
  }

  const alertaForm = document.getElementById("alerta-form");
  if (alertaForm) {
    const TELEFONE_PADOCA = "5541991434153";
    const nomeInput = document.getElementById("alerta-nome");
    const feedback = alertaForm.querySelector(".alerta-feedback");
    let canalEscolhido = "whatsapp";

    alertaForm.querySelectorAll("button[data-canal]").forEach((botao) => {
      botao.addEventListener("click", () => {
        canalEscolhido = botao.dataset.canal;
      });
    });

    alertaForm.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const nome = nomeInput.value.trim();
      if (!nome) {
        nomeInput.focus();
        return;
      }

      const mensagem =
        "Olá, Padocafé! Eu sou " +
        nome +
        " e quero entrar na lista do ALERTA DE PÃO 🔔🥖 " +
        "Me avisem quando uma nova fornada estiver saindo do forno!";

      const url =
        canalEscolhido === "sms"
          ? "sms:+" + TELEFONE_PADOCA + "?body=" + encodeURIComponent(mensagem)
          : "https://wa.me/" + TELEFONE_PADOCA + "?text=" + encodeURIComponent(mensagem);

      window.open(url, "_blank", "noopener");

      if (feedback) {
        feedback.textContent =
          canalEscolhido === "sms"
            ? "Abrindo seu app de SMS… é só enviar a mensagem para confirmar! 📱"
            : "Abrindo o WhatsApp… é só enviar a mensagem para confirmar! 💬";
      }
    });
  }

  const header = document.querySelector(".site-header");
  if (header) {
    const scrollThreshold = 32;

    const updateHeaderOnScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > scrollThreshold);
    };

    updateHeaderOnScroll();
    window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
  }

  const heroCarousel = document.querySelector(".hero-carousel");
  if (heroCarousel) {
    const slides = Array.from(heroCarousel.querySelectorAll(".hero-slide"));
    const dots = Array.from(heroCarousel.querySelectorAll("[data-hero-dot]"));
    const prevBtn = heroCarousel.querySelector("[data-hero-prev]");
    const nextBtn = heroCarousel.querySelector("[data-hero-next]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const autoplayDelay = 6000;
    let currentIndex = 0;
    let autoplayTimer = null;

    const goToSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        const isActive = i === currentIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
        slide.setAttribute("aria-label", `${i + 1} de ${slides.length}`);
      });

      dots.forEach((dot, i) => {
        const isActive = i === currentIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", String(isActive));
      });
    };

    const nextSlide = () => goToSlide(currentIndex + 1);
    const prevSlide = () => goToSlide(currentIndex - 1);

    const stopAutoplay = () => {
      if (autoplayTimer) {
        window.clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };

    const startAutoplay = () => {
      stopAutoplay();
      if (!prefersReducedMotion && slides.length > 1) {
        autoplayTimer = window.setInterval(nextSlide, autoplayDelay);
      }
    };

    prevBtn?.addEventListener("click", () => {
      prevSlide();
      startAutoplay();
    });

    nextBtn?.addEventListener("click", () => {
      nextSlide();
      startAutoplay();
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        goToSlide(Number(dot.dataset.heroDot));
        startAutoplay();
      });
    });

    heroCarousel.addEventListener("mouseenter", stopAutoplay);
    heroCarousel.addEventListener("mouseleave", startAutoplay);
    heroCarousel.addEventListener("focusin", stopAutoplay);
    heroCarousel.addEventListener("focusout", startAutoplay);

    startAutoplay();
  }
})();

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
})();

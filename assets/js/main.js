const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const messageFromForm = () => {
    const data = new FormData(contactForm);
    return [...data.entries()]
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const subject = encodeURIComponent("Vraag over dakwerken");
    const body = encodeURIComponent(messageFromForm());
    window.location.href = `mailto:${contactForm.dataset.email}?subject=${subject}&body=${body}`;
  });

  const whatsappButton = contactForm.querySelector(".contact-whatsapp-submit");
  whatsappButton?.addEventListener("click", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const intro = "Dag Werner, ik heb een vraag over dakwerken.";
    const text = encodeURIComponent(`${intro}\n\n${messageFromForm()}`);
    window.open(`${contactForm.dataset.whatsapp}?text=${text}`, "_blank", "noopener");
  });
}

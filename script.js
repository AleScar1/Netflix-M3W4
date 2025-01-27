document.addEventListener("DOMContentLoaded", () => {
  const accountImage = document.getElementById("accountImage");
  const dropdownMenu = document.getElementById("dropdownMenu");

  // Gestione del menu dropdown
  accountImage.addEventListener("click", (event) => {
    event.preventDefault();
    const isVisible = dropdownMenu.style.display === "block";
    dropdownMenu.style.display = isVisible ? "none" : "block";

    // Attiva l'osservazione degli elementi quando il menu è visibile
    if (!isVisible) {
      const elements = document.querySelectorAll(".animate-on-scroll");
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Aggiunge la classe "visible" per attivare l'animazione
            observer.unobserve(entry.target); // Smette di osservare l'elemento
          }
        });
      });

      // Applica l'osservatore a ciascun elemento
      elements.forEach((el) => observer.observe(el));
    }
  });

  // Chiude il menu dropdown quando si clicca fuori
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".account-dropdown")) {
      dropdownMenu.style.display = "none";
    }
  });

  // Animazione degli elementi con la classe "animate-on-scroll"
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Aggiunge la classe "visible"
          observer.unobserve(entry.target); // Smette di osservare l'elemento
        }
      });
    },
    {
      root: null, // Usa il viewport come contenitore di osservazione
      rootMargin: "0px 0px -50px 0px", // Triggera 50px prima che entri completamente nel viewport
      threshold: 0.1, // Attiva l'animazione quando il 10% dell'elemento è visibile
    }
  );

  // Applica l'osservatore agli elementi con la classe "animate-on-scroll"
  elements.forEach((el) => observer.observe(el));
});




/* Codigo para menu Mobile*/

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
    document.body.classList.toggle("overflow-hidden");

    mobileMenu.classList.toggle("-translate-x-full");

    setTimeout(function () {
      mobileMenu.classList.toggle("hidden");
    }, 50);
  });

  // Ocultar o menu quando clicado fora dele
  document.addEventListener("click", function (event) {
    if (
      !menuToggle.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      mobileMenu.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }
  });
});

// logica sobre
document
  .getElementById("toggle-info")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const moreInfo = document.getElementById("more-info");
    if (moreInfo.classList.contains("hidden")) {
      moreInfo.classList.remove("hidden");
      this.textContent = "Mostrar menos";
    } else {
      moreInfo.classList.add("hidden");
      this.textContent = "Saber mais sobre";
    }
  });

// logica projetos
document.getElementById("freelancerBtn").addEventListener("click", function () {
  document.getElementById("freelancerProjects").classList.remove("hidden");
  document.getElementById("personalProjects").classList.add("hidden");
});

document.getElementById("personalBtn").addEventListener("click", function () {
  document.getElementById("personalProjects").classList.remove("hidden");
  document.getElementById("freelancerProjects").classList.add("hidden");
});

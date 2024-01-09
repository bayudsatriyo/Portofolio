window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const hamburger = document.getElementById("hamburger");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    hamburger.classList.remove("right-4");
    hamburger.classList.add("right-[79px]");
  } else {
    header.classList.remove("navbar-fixed");
    hamburger.classList.remove("right-[79px]");
    hamburger.classList.add("right-4");
  }
};
const hamburger = document.getElementById("hamburger");
const NavMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  NavMenu.classList.toggle("hidden");
});

// Mengambil semua elemen link
const links = document.querySelectorAll("a");

// Menambahkan event listener pada setiap link
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Mengambil id dari elemen tujuan
    const id = link.getAttribute("href");
    // Jika id diawali dengan tanda pagar, maka link internal
    if (id.startsWith("#")) {
      // Mencegah perilaku default dari link
      e.preventDefault();
      // Mengambil elemen tujuan berdasarkan id
      const target = document.querySelector(id);
      // Menggerakkan elemen tujuan ke dalam pandangan dengan efek smooth
      target.scrollIntoView({ behavior: "smooth" });
    }
    // Jika tidak, maka link eksternal dan biarkan perilaku default
  });
});

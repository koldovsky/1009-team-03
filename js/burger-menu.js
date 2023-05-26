(function () {
  const Burger = document.querySelector(".header__hamburger");
  const navigation_wrapper = document.querySelector(".header__wrapper");
  Burger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    Burger.classList.toggle("active");
    navigation_wrapper.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".header__burger-menu-link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
      if (Burger.classList.contains("active")) {
        document.body.classList.remove("lock");
        Burger.classList.remove("active");
        navigation_wrapper.classList.remove("active");
      }
    }
    );
  });
})();
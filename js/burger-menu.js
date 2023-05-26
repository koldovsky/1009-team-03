const burger = document.querySelector(".header__hamburger");
const navigation_wrapper = document.querySelector(".header__wrapper");
burger.addEventListener("click", function (e) {
  navigation_wrapper.classList.toggle("active");
  document.body.classList.toggle("lock");
  burger.classList.toggle("active");
});

const link = document.querySelectorAll(".header__burger-menu-link");
link.forEach((navLink) => {
  navLink.addEventListener("click", (_) => {
    if (burger.classList.contains("active")) {
      burger.classList.remove("active");
      navigation_wrapper.classList.remove("active");
      document.body.classList.remove("lock");
    }
  }
  );
});

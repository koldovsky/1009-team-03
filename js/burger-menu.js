(function () 
{
  const Burger = document.querySelector(".header__hamburger");
  const navigation_wrapper = document.querySelector(".header__wrapper");
  Burger.addEventListener("click", function (e) {
    navigation_wrapper.classList.toggle("active");
    document.body.classList.toggle("lock");
    Burger.classList.toggle("active");
  });

  const Link = document.querySelectorAll(".header__burger-menu-link");
  Link.forEach((navLink) => 
  {
    navLink.addEventListener("click", (_) => {
      if (Burger.classList.contains("active")) {
        Burger.classList.remove("active");
        navigation_wrapper.classList.remove("active");
        document.body.classList.remove("lock");
      }
    }
    );
  });
})();
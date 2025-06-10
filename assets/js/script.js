const animateVid = () => {
  const vid = document.querySelector(".vid");

  function handleScroll() {
    const vidTop = vid.getBoundingClientRect().top;

    if (vidTop <= window.innerHeight - 200) {
      vid.classList.add("roll-In");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
};
animateVid();

// Add event listener for scroll
window.addEventListener("scroll", () => {
  const logoImage = document.querySelector('header img[alt="Audio Pro logo"]');
  const menuImage = document.querySelector('header img[alt="menu button"]');
  const navbar = document.querySelector("header");
  const nextSection = document.querySelector("main");

  // Check if the next section is scrolled into view
  const nextSectionTop = nextSection.getBoundingClientRect().top;

  if (nextSectionTop <= 0) {
    // Add classes for the scrolled state
    navbar.classList.add("bg-white", "text-black");
    navbar.classList.remove("bg-transparent", "text-white");

    // Change the src attributes for the scrolled state
    logoImage.src = "images/logo-on-white.png";
    menuImage.src = "images/menu-on-white.png";
  } else {
    // Revert to the original state
    navbar.classList.add("bg-transparent", "text-white");
    navbar.classList.remove("bg-white", "text-black");

    // Revert to the original src attributes
    logoImage.src = "images/logo-on-black.png";
    menuImage.src = "images/menu-on-black.png";
  }
});

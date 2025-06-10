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


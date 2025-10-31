document.addEventListener("DOMContentLoaded", function () {
  // https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
  const ratio = 0.1;
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
  };

  function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add("fx-reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersect, options);

  document.querySelectorAll(".fx-reveal").forEach(function (r) {
    observer.observe(r);
  });

  //gallery slider

  const slideGallery = document.querySelectorAll(".slide__gallery");
  const prevBtn = document.querySelector(".gallery__buttons .prev__btn");
  const nextBtn = document.querySelector(".gallery__buttons .next__btn");

  let currentImageIndex = 0;

  function updateGallery(newIndex) {
    if (newIndex >= slideGallery.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = slideGallery.length - 1;
    }

    currentImageIndex = newIndex;

    slideGallery.forEach((slide, index) => {
      const isActive = index === currentImageIndex;

      slide.classList.toggle("inactive", !isActive);
    });
  }

  nextBtn.addEventListener("click", () => {
    updateGallery(currentImageIndex + 1, "slideGallery");
  });

  prevBtn.addEventListener("click", () => {
    updateGallery(currentImageIndex - 1, "slideGallery");
  });

  //end gallery slider

  const mobileBtn = document.querySelector(".mobile__btn");
  const mobileOpen = document.querySelector(".mobile__open");
  const mobileClose = document.querySelector(".mobile__close");
  const headerNav = document.querySelector(".header__nav");

  function toggleMobileMenu() {
    headerNav.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
    mobileOpen.classList.toggle("inactive");
    mobileClose.classList.toggle("inactive");
  }

  const desktopMediaQuery = window.matchMedia("(min-width: 64em)");

  mobileBtn.addEventListener("click", toggleMobileMenu);

  function handleDesktopChange(e) {
    if (e.matches) {
      headerNav.classList.remove("open");
    }
  }
  desktopMediaQuery.addListener(handleDesktopChange);
});

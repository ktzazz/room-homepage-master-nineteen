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

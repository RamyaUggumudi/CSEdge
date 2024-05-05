const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const closeLightbox = document.querySelector(".close-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    const fullImagePath = image.dataset.fullImage;
    lightboxImage.src = fullImagePath;
    lightbox.classList.add("active");
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

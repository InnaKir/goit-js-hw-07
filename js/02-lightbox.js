import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const imgMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>`;
    })
    .join("");
}

var slider = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const imgMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", bigImgOpen);

function bigImgOpen(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const bigImg = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600"> `,
    {
      onShow: (bigImg) => {
        document.addEventListener("keydown", onEscapeKeyDown);
      },
      onClose: (bigImg) => {
        document.removeEventListener("keydown", onEscapeKeyDown);
      },
    }
  );
  bigImg.show();

  function onEscapeKeyDown(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    bigImg.close();
  }
}

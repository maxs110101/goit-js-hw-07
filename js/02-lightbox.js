import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

function createImagesMarkup(imgArray) {
  return imgArray
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`;
    })
    .join("");
}

galleryList.innerHTML = createImagesMarkup(galleryItems);

// -----------------------------------------------------------

galleryList.addEventListener("click", onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  let gallery = new SimpleLightbox(".gallery__item", {
    captionDelay: 250,
    overlayOpacity: 0.5,
  });

  document.addEventListener("keydown", onCloseModal);
}

function onCloseModal(evt) {
  evt.preventDefault();

  if (evt.code === "Escape") {
    closed.simplelightbox;
  }

  document.removeEventListener("keydown", onCloseModal);
}

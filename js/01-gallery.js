import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryOne = document.querySelector(".gallery");

function createImagesMarkup(imgArray) {
  return imgArray.map(({ preview, original, description }) => {
    const wrap = createWrap();
    const link = createlink(original);
    const image = createImage(preview, original, description);

    link.append(image);
    wrap.append(link);

    return wrap;
  });
}

function createWrap() {
  const wrap = document.createElement("div");
  wrap.classList.add("gallery__item");
  return wrap;
}

function createlink(href) {
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = href;
  return link;
}

function createImage(src, data, alt) {
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = src;
  image.dataset.source = data;
  image.alt = alt;
  return image;
}

galleryOne.append(...createImagesMarkup(galleryItems));
// -------------------------------------------------------
galleryOne.addEventListener("click", onOpenModal);

let modalImg = null;

function onOpenModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const parent = evt.target.parentNode.href;

  modalImg = basicLightbox.create(`
        <img src="${parent}" width="800" height="600">
    `);

  modalImg.show(modalImg);

  document.addEventListener("keydown", onCloseModal);
}

function onCloseModal(evt) {
  evt.preventDefault();

  if (evt.code === "Escape") {
    modalImg.close();
  }

  document.removeEventListener("keydown", onCloseModal);
}

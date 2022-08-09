const selectedImages = document.querySelectorAll("#images");
const image = document.querySelector(".test-image");
const displayedImage = document.querySelector("#displayed-image");

console.log(selectedImages.length);

const selectedImgSource = (e) => {
  let source = e.target.src;
  displayedImage.src = source;
};

for (i = 0; i <= selectedImages.length; i++) {
  selectedImages[i].addEventListener("click", selectedImgSource);
}

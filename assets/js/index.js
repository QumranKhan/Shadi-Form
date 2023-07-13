/*Upload photo*/

/*Access elements + create array*/
const input = document.querySelector("input")
const output = document.querySelector("output")
let imagesArray = []

/*Detects when user add image*/
input.addEventListener("change", () => {
    const file = input.files
    imagesArray.push(file[0]) /*stored in varible named file*/
    displayImages()
  })

  function displayImages() {
    let images = ""
    imagesArray.forEach((image, index) => {
      images += `<div class="image">
                  <img src="${URL.createObjectURL(image)}" alt="image">
                  <span onclick="deleteImage(${index})">&times;</span>
                </div>`
    })
    output.innerHTML = images
  }

  /*Allows images to be deleted*/
  function deleteImage(index) {
    imagesArray.splice(index, 1)
    displayImages()
  }

/*Next page to fill out partners details*/

const form = document.getElementById('multi-page-form');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let currentPage = 1;
const totalPages = form.children.length;

function showPage(pageNumber) {
  for (let i = 0; i < form.children.length; i++) {
    form.children[i].style.display = i + 1 === pageNumber ? 'block' : 'none';
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);

showPage(currentPage);

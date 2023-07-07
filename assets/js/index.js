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
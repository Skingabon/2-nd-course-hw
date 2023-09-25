const inputImgElements = document.querySelector(".add-form-img");
const inputPostElements = document.querySelector(".add-form-post");
const imgContainer = document.querySelector(".container");

const addButton = document.getElementById("add-button");



addButton.addEventListener('click', () => {
imgContainer.innerHTML = imgContainer.innerHTML +
    `<li class="container-item">
            <img src="${inputImgElements.value}" alt="cap1" class="im"><p>${inputPostElements.value}</p></li>`
        
})


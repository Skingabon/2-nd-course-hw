
// const buttonElement = document.getElementById("add-button");
// const listElement = document.getElementById("list");
// const nameInputElement = document.getElementById("name-input");
// const colorInputElement = document.getElementById("color-input");


// const studentElements = document.querySelectorAll(".student");
// console.log(studentElements);
// for (const studentElements of studentElements){
//   console.log(studentElements);
// }


// buttonElement.addEventListener("click", () => {
//   nameInputElement.classList.remove("input-error");

//   if (nameInputElement.value === "") {
//     nameInputElement.classList.add("input-error");
//     return;
//   }

//   listElement.innerHTML =
//     listElement.innerHTML +
//     `<li class="student">
//         <p class="student-name">
//           ${nameInputElement.value}, любимый цвет
//           <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
//         </p>
//       </li>`;

//   nameInputElement.value = "";
// });
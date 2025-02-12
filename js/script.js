console.log("Cześć!");

let button = document.querySelector(".js-button");
let picture = document.querySelector(".js-picture");

button.addEventListener("click", () => {
  if (button.innerText === "Naciśnij, aby usunąć zdjęcie") {
    picture.remove();
    button.innerText = "Zdjęcie zostało usunięte";
  } else {
    button.innerText = "Zdjęcie zniknęło😟";
  }
});
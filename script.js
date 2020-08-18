// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const response = document.querySelector(".aleluya");
const frases = [
  "Aleluya!!!",
  "Gloria!!!!",
  "Recíbelo!!!",
  "Siéntelo",
  "Alábalo!!!",
  "ya viene",
  "Alaba!!!!",
  "Loado!!!!",
  "será",
  "ten fe",
  "abrázalo!!!!",
];

// Event listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  if (todoInput.value == "") {
    alert("recuerda escribir tu plegaria en el espacio en blanco");
    return false;
  } else {
    // prevent form from submitting
    event.preventDefault();
    // Select esponse after prayer:
    const alaba = frases[Math.floor(Math.random(0, 10) * frases.length)];
    // Display response after prayer:
    response.innerText = alaba;
    response.classList.add("animation");
    //   clear  input value:
    todoInput.value = "";
  }
}

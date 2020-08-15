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
];

// Event listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  // Select esponse after prayer:
  const alaba = frases[Math.floor(Math.random() * frases.length)];
  // Display response after prayer:
  response.innerText = alaba;
  //   clear  input value:
  todoInput.value = "";
}

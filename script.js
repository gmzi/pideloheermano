// Animator class
class Animator {
    constructor(selector) {
        this.selector = document.querySelector(selector);
    }
    fadeOut(time, toggle = false) {
        if (toggle && this.selector.classList.contains('fadeOut-active')) {
            this.selector.style.opacity = 1;
            this.selector.classList.remove("fadeOut-active");
        } else {
            this.selector.style.transition = `all ${time}s ease`;
            this.selector.style.opacity = 0;
            // toggle:
            this.selector.classList.add("fadeOut-active");
        }
    }
    move(time, toggle = false, { x = "0", y = "0" }) {
        if (toggle && this.selector.classList.contains('move-active')) {
            this.selector.style.transform = "translate(0px, 0px)";
            this.selector.classList.remove("move-active");
        } else {
            this.selector.style.transition = `all ${time}s ease`;
            this.selector.style.transform = `translate(${x}px, ${y}px)`;
            // toggle:
            this.selector.classList.add("move-active");
        }
    }
}

// Selectors
const palabrasQuedan = document.querySelector(".palabras-quedan");
const palabrasQuedanContainer = new Animator(".palabras-quedan-container");
const textarea = document.querySelector("textarea");
const form = new Animator("form");
const escribe = new Animator(".escribe");
const buttonClick = document.querySelector(".todo-button");
const todoContainer = new Animator(".todo-container");
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

// Event Listener and function:
buttonClick.addEventListener("click", () => {
    event.preventDefault();
    // alert:
    if (textarea.value == "") {
        alert("Concéntrate hermano y recuerda escribir tu plegaria en el espacio en blanco");
        return false;
    } else {
        // text capture:
        const palabras = document.getElementById("todo-textarea").value;
        palabrasQuedan.innerText = palabras;
        // animations:
        form.fadeOut(3, true);
        escribe.fadeOut(3, true);
        palabrasQuedanContainer.move(20, true, { x: 1350, y: -1000 });
        // palabrasQuedanContainer.fadeOut(20, true);
        // Amen message:
        // 1.amen text selection:
        const alaba = frases[Math.floor(Math.random(0, 10) * frases.length)];
        // 2.amen text:
        response.innerText = alaba;
        // 3.amen animations:
        response.classList.add("animation");
        todoContainer.move(4, true, { y: -150 })
        //   clear  input value:
        todoInput.value = "";

    }
})


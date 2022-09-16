const btn = document.querySelector("#btn");
const text = document.querySelector("p");
const paragraph = document.querySelector("#paragraph");
const textBox = document.querySelector("#user");

btn.addEventListener("click",(e) => {
    const parrafo = document.createElement("p");
    parrafo.innerText = "Verificado";
    paragraph.append(parrafo);
});

textBox.addEventListener("input", () => paragraph.innerText = textBox.value);
const name = "Alisson!";
const speed = 100; // Velocidade em milissegundos

let i = 0;
function typeWriter() {
    if (i < name.length) {
        document.getElementById("name").innerHTML += name.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = function () {
    typeWriter();
};

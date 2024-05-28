const name = "Alisson!";
const speed = 100;
let i = 0;

function typeWriter(callback) {
    if (i < name.length) {
        document.getElementById("name").innerHTML += name.charAt(i);
        i++;
        setTimeout(() => typeWriter(callback), speed);
    } else {
        if (callback) callback();
    }
}

const cargo = "Desenvolvedor FullStack"
const velocidade = 50;
let x = 0;

function printCargo(callback) {
    if (x < cargo.length) {
        document.getElementById("cargo").innerHTML += cargo.charAt(x);
        x++;
        setTimeout(() => printCargo(callback), velocidade);
    } else {
        if (callback) callback();
    }
}

const ola = "Olá, me chamo";
let z = 0;

function printOla(callback) {
    if (z < ola.length) {
        document.getElementById("ola").innerHTML += ola.charAt(z);
        z++;
        setTimeout(() => printOla(callback), 100);
    } else {
        if (callback) callback();
    }
}

window.onload = function () {
    printOla(() => {
        typeWriter(() => {
            printCargo();
        });
    });
};


document.addEventListener('DOMContentLoaded', (event) => {
    const timelinePanel = document.getElementById('timelinePanel');
    let isDown = false;
    let startX;
    let scrollLeft;

    timelinePanel.addEventListener('mousedown', (e) => {
        isDown = true;
        timelinePanel.classList.add('active');
        startX = e.pageX - timelinePanel.offsetLeft;
        scrollLeft = timelinePanel.scrollLeft;
    });

    timelinePanel.addEventListener('mouseleave', () => {
        isDown = false;
        timelinePanel.classList.remove('active');
    });

    timelinePanel.addEventListener('mouseup', () => {
        isDown = false;
        timelinePanel.classList.remove('active');
    });

    timelinePanel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - timelinePanel.offsetLeft;
        const walk = (x - startX); 
        timelinePanel.scrollLeft = scrollLeft - walk;
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const timelinePanel = document.getElementById('card-projects');
    let isDown = false;
    let startX;
    let scrollLeft;

    timelinePanel.addEventListener('mousedown', (e) => {
        isDown = true;
        timelinePanel.classList.add('active');
        startX = e.pageX - timelinePanel.offsetLeft;
        scrollLeft = timelinePanel.scrollLeft;
    });

    timelinePanel.addEventListener('mouseleave', () => {
        isDown = false;
        timelinePanel.classList.remove('active');
    });

    timelinePanel.addEventListener('mouseup', () => {
        isDown = false;
        timelinePanel.classList.remove('active');
    });

    timelinePanel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - timelinePanel.offsetLeft;
        const walk = (x - startX); 
        timelinePanel.scrollLeft = scrollLeft - walk;
    });
});

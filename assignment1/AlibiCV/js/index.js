const printBtn = document.getElementById('print');

printBtn.addEventListener('click', function () {
    window.print();
})

const image = document.getElementById('myPhoto');

image.addEventListener('mouseover', () => {
    image.style.filter = 'grayscale(100%)';
});

image.addEventListener('mouseout', () => {
    image.style.filter = 'none';
});


$(document).keypress(function () {
    $("h1").text("Welcome");
})


let play = document.getElementById("play");
function playMusic() {
    let audio = new Audio("audio.mp3");
    audio.play();
}
play.addEventListener("click", playMusic);
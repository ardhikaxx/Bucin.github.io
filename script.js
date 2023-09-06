// Halaman 2: Pertanyaan
const loveAnimation = document.getElementById("love-animation");
const message = document.getElementById("message");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

let loveAnimationInterval;

yesButton.addEventListener("click", () => {
    clearInterval(loveAnimationInterval);
    loveAnimation.style.animation = "none";
    loveAnimation.innerHTML = "❤️";
    const name = getParameterByName("name");
    message.innerHTML = `I Love You ${name} ❤️`;
    message.style.fontSize = "24px";
    yesButton.style.display = "none";
    noButton.style.display = "none";
});

noButton.addEventListener("click", () => {
    // Menampilkan notifikasi "Oke, gakpapa kok :)"
    alert("Oke, gakpapa kok :)");
});

noButton.addEventListener("mouseout", () => {
    clearInterval(loveAnimationInterval);
    loveAnimation.style.transform = "translate(0, 0)";
});

// Fungsi untuk mendapatkan parameter dari URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
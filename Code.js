const nameInput = document.getElementById("name-input");
const okButton = document.getElementById("ok-button");

okButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name !== "") {
        window.location.href = `page2.html?name=${name}`;
    } else {
        alert("Silakan isi nama Anda terlebih dahulu.");
    }
});
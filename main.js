const colorInput = document.getElementById("inputi");

colorInput.addEventListener('input', () => {
    document.body.style.backgroundColor = colorInput.value;
});
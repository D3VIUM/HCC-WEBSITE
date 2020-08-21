window.onload = () => {
    const input_headings = window.document.querySelectorAll("form section h2");

    for (let i = 0; i < input_headings.length - 1; i++){
        input_headings[i].addEventListener("click", () => {
            input_headings[i].nextElementSibling.classList.toggle("open");
        });
    }
}
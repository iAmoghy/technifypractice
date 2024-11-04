const button = document.getElementById("colorButton");
const body = document.body;

button.addEventListener("click", () =>  {
    if (body.style.backgroundColor === "blue") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "blue";
        body.style.color = "white";
    }
});
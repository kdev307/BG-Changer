document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("btn-red");
    const blue = document.getElementById("btn-blue");
    const green = document.getElementById("btn-green");
    const yellow = document.getElementById("btn-yellow");
    const magenta = document.getElementById("btn-magenta");
    const cyan = document.getElementById("btn-cyan");
    const purple = document.getElementById("btn-purple");
    const black = document.getElementById("btn-black");
    const grey = document.getElementById("btn-grey");
    const rand = document.getElementById("btn-rand");

    red.addEventListener("click", function () {
        bgChange("red");
    });
    blue.addEventListener("click", function () {
        bgChange("blue");
    });
    green.addEventListener("click", function () {
        bgChange("green");
    });
    yellow.addEventListener("click", function () {
        bgChange("yellow");
    });
    magenta.addEventListener("click", function () {
        bgChange("magenta");
    });
    cyan.addEventListener("click", function () {
        bgChange("cyan");
    });
    purple.addEventListener("click", function () {
        bgChange("purple");
    });
    black.addEventListener("click", function () {
        bgChange("black");
    });
    grey.addEventListener("click", function () {
        bgChange("grey");
    });
    rand.addEventListener("click", function () {
        const randomColor = getRandomColor();
        bgChange(randomColor);
    });

    function bgChange(color) {
        document.body.style.backgroundColor = color;
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        // hexadecimal (base 16) => 6 characters
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]; // Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
        }
        // color is alloted based on the index
        return color;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const colorPalette = document.getElementById("colorPalette");
    const generateButton = document.getElementById("generateButton");

    // Initial colors
    const initialColors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12"];

    // Function to generate random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to generate color palette
    function generateColorPalette() {
        colorPalette.innerHTML = ""; // Clear existing colors

        for (let i = 0; i < 4; i++) {
            const colorDiv = document.createElement("div");
            colorDiv.classList.add("color");
            colorDiv.style.backgroundColor = getRandomColor();
            colorPalette.appendChild(colorDiv);
        }
    }

    // Initial generation
    generateColorPalette();

    // Event listener for the "Generate Color Palettes" button
    generateButton.addEventListener("click", generateColorPalette);
});

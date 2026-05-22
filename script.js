// Selecting elements
let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");

// Buttons
let changeTextBtn = document.getElementById("changeTextBtn");
let colorBtn = document.getElementById("colorBtn");
let fontBtn = document.getElementById("fontBtn");
let toggleBtn = document.getElementById("toggleBtn");
let resetBtn = document.getElementById("resetBtn");

// 1. Change Heading Text
changeTextBtn.onclick = function() {
    if (input.value.trim() !== "") {
        heading.innerText = input.value;
    }
};

// 2. Cycle Background Colors
let colors = ["brown", "cyan", "lightblue", "lightgreen"];
let currentColor = 0;
colorBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
});

// 3. Change Font Size (on click)
fontBtn.addEventListener("click", function() {
    heading.style.fontSize = "40px";
});

// 4. Show/Hide Paragraph
let isVisible = true;
toggleBtn.addEventListener("click", function() {
    para.style.display = isVisible ? "none" : "block";
    isVisible = !isVisible;
});

// 5. Input Change Event
input.onchange = function() {
    console.log("Input changed to: " + input.value);
};

// 6. Reset Page
resetBtn.addEventListener("click", function() {
    heading.innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "white";
    heading.style.fontSize = "24px";
    para.style.display = "block";
    input.value = "";
    currentColor = 0; // reset color cycle
});

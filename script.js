// Get required elements
const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const bgBtn = document.getElementById("bg-btn");
const textBtn = document.getElementById("text-btn");
const box = document.getElementById("box");

// Helper: check if a color is valid
function isValidColor(color) {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
}

// Change background color
bgBtn.addEventListener("click", function () {
  const color = colorInput.value.trim();

  if (isValidColor(color)) {
    box.style.backgroundColor = color;
  } else {
    alert("Invalid color name!");
  }
});

// Update text content
textBtn.addEventListener("click", function () {
  const text = textInput.value.trim();

  if (text === "") {
    alert("Please enter some text!");
  } else {
    box.textContent = text;
  }
});

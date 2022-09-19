// Variables
const snakeField = document.getElementById("snakeField");
let getRandomColor = Math.floor(0x1000000 + Math.random() * 0xffffff)
  .toString(16)
  .substr(1, 6);

// Create 100 divs
for (let i = 0; i <= 99; i++) {
  let newDiv = document.createElement("div");
  newDiv.className = "item";
  snakeField.appendChild(newDiv);
}

// Mouse-over function
let snakeGame = () => {
  snakeField.childNodes.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "#" + getRandomColor;
      originalColor = () => {
        item.style.backgroundColor = "";
      };
      setTimeout(originalColor, 500);
    });
  });
};
snakeGame();

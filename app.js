const GridSide = 600;
let currentColor = "black";
let randomColor = false;

const mainContainer = document.querySelector("#main-container");
const resetButton = document.querySelector("#reset-button");
const sizeButton = document.querySelector("#size-button");
const randomButton = document.querySelector("#random-button");
const eraserButton = document.querySelector("#eraser-button");
const redButton = document.querySelector("#red-button");
const blueButton = document.querySelector("#blue-button");
const blackButton = document.querySelector("#black-button");
const colorPicker = document.querySelector("#color-picker");

mainContainer.style.width = `${GridSide}px`;
mainContainer.style.height = `${GridSide}px`;

function setBackgroundColor() {
	if (randomColor) {
		let randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
		this.style.backgroundColor = `#${randomHexColor.padStart(6, "0")}`;
	} else {
		this.style.backgroundColor = currentColor;
	}
}

function createGrid(gridSize) {
	for (let i = 0; i < gridSize * gridSize; i++) {
		const gridCell = document.createElement("div");

		gridCell.style.width = `${GridSide / gridSize}px`;
		gridCell.style.height = `${GridSide / gridSize}px`;
		gridCell.classList.add("cell");

		mainContainer.appendChild(gridCell);

		gridCell.addEventListener("mouseover", setBackgroundColor);
	}
}

function removeGrid() {
	while (mainContainer.firstChild) {
		mainContainer.removeChild(mainContainer.firstChild);
	}
}

function resetGrid() {
	removeGrid();
	createGrid(16);
}

function setGridSize() {
	let gridSize = prompt("Enter new grid size:");
	gridSize = parseInt(gridSize);
	if (gridSize > 0 && gridSize <= 100) {
		removeGrid();
		createGrid(gridSize);
	} else {
		alert("Please enter a valid number");
	}
}

resetButton.addEventListener("click", resetGrid);
sizeButton.addEventListener("click", setGridSize);
randomButton.addEventListener("click", () => {
	randomColor = !randomColor;
});
eraserButton.addEventListener("click", () => {
	currentColor = "white";
	randomColor = false;
});
redButton.addEventListener("click", () => {
	currentColor = "red";
	randomColor = false;
});
blueButton.addEventListener("click", () => {
	currentColor = "blue";
	randomColor = false;
});
blackButton.addEventListener("click", () => {
	currentColor = "black";
	randomColor = false;
});
colorPicker.addEventListener("input", (event) => {
	currentColor = event.target.value;
	randomColor = false;
});

createGrid(16);

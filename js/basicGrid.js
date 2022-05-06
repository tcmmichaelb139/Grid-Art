let boxSideLength = 25;
let headerOffSet = document.getElementById("header").offsetHeight;
let numHeightBoxes =
    Math.floor((window.innerHeight - headerOffSet) / boxSideLength) - 2;
let numWidthBoxes = Math.floor(window.innerWidth / boxSideLength) - 2;
for (let i = 0; i < numHeightBoxes; i++) {
    let row = document.createElement("tr");
    row.id = "row " + i;
    document.getElementById("tableContainer").appendChild(row);
    for (let j = 0; j < numWidthBoxes; j++) {
        let col = document.createElement("td");
        col.id = i + "-" + j;
        col.style.backgroundColor = "#ffffff";
        col.style.borderColor = "#000000";
        document.getElementById("row " + i).appendChild(col);
    }
}

document.getElementById("clearBtn").addEventListener("click", clearGrid);

async function clearGrid() {
    console.log("a;lsdkjf;asld");
    for (let i = 0; i < numHeightBoxes; i++) {
        for (let j = 0; j < numWidthBoxes; j++) {
            let box = document.getElementById(String(i + "-" + j));
            box.classList.remove("fadeIn");
            box.classList.add("fadeOut");
            box.style.backgroundColor = "#ffffff";
            box.style.borderColor = "#000000";
            setTimeout(() => box.classList.remove("fadeOut"), 500);
        }
    }
}

let isDragging = false;

document.getElementById("gridContainer").addEventListener("mouseleave", () => {
    isDragging = false;
});

document.getElementById("gridContainer").addEventListener("mousedown", () => {
    isDragging = true;
});

document.getElementById("gridContainer").addEventListener("mouseup", () => {
    isDragging = false;
});

for (let i = 0; i < numHeightBoxes; i++) {
    for (let j = 0; j < numWidthBoxes; j++) {
        let box = document.getElementById(String(i + "-" + j));
        box.addEventListener("click", () => switchColor(box.id));
        box.addEventListener("mousemove", () => switchColor(box.id));
    }
}

async function switchColor(cell) {
    let color = document.querySelector("#colorpicker").value;
    let box = document.getElementById(cell);
    if (isDragging) {
        if (!document.getElementById("sliderSwitch").checked) {
            box.classList.remove("fadeOut");
            box.classList.add("fadeIn");
            box.style.backgroundColor = color;
            box.style.borderColor = color;
            setTimeout(() => box.classList.remove("fadeIn"), 500);
        } else {
            box.classList.remove("fadeIn");
            box.classList.add("fadeOut");
            box.style.backgroundColor = "#ffffff";
            box.style.borderColor = "#000000";
            setTimeout(() => box.classList.remove("fadeOut"), 500);
        }
    }
}

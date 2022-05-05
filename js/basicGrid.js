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
        col.className = "gridOff";
        col.id = i + "-" + j;
        document.getElementById("row " + i).appendChild(col);
    }
}

document.getElementById("clearBtn").addEventListener("click", clearGrid);

async function clearGrid() {
    for (let i = 0; i < numHeightBoxes; i++) {
        for (let j = 0; j < numWidthBoxes; j++) {
            let box = document.getElementById(String(i + "-" + j));
            if (box.classList.contains("gridOn")) {
                box.classList.add("gridOff");
                box.classList.add("fadeOut");
                box.style.backgroundColor = "#ffffff";
                box.style.borderColor = "#000000";
                box.classList.remove("gridOn");
                box.classList.remove("fadeIn");
                setTimeout(() => box.classList.remove("fadeOut"), 1000);
            }
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
            if (box.classList.contains("gridOff")) {
                box.classList.remove("gridOff");
            }
            if (box.classList.contains("fadeOut"))
                box.classList.remove("fadeOut");
            box.classList.add("gridOn");
            box.classList.add("fadeIn");
            box.style.backgroundColor = color;
            box.style.borderColor = color;
        } else {
            if (box.classList.contains("gridOn")) {
                box.classList.remove("gridOn");
                box.classList.add("fadeOut");
            }
            if (box.classList.contains("fadeIn"))
                box.classList.remove("fadeIn");
            box.classList.add("gridOff");
            box.style.backgroundColor = "#ffffff";
            box.style.borderColor = "#000000";
            setTimeout(() => box.classList.remove("fadeOut"), 1000);
        }
    }
}

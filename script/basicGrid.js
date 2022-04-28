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
        col.setAttribute("draggable", false);
        document.getElementById("row " + i).appendChild(col);
    }
}

let colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
    "gray",
];

document.getElementById("clearBtn").addEventListener("click", clearGrid);

function clearGrid() {
    for (let i = 0; i < numHeightBoxes; i++) {
        for (let j = 0; j < numWidthBoxes; j++) {
            let box = document.getElementById(String(i + "-" + j));
            if (box.classList.contains("gridOn")) {
                colors.forEach((color) => {
                    if (box.classList.contains(color + "Entry"))
                        box.classList.remove(color + "Entry");
                });
                box.classList.add("gridOff");
                box.classList.add("fadeOut");
                box.classList.remove("gridOn");
                box.classList.remove("fadeIn");
            }
        }
    }
}

let isDragging = false;

for (let i = 0; i < numHeightBoxes; i++) {
    for (let j = 0; j < numWidthBoxes; j++) {
        let box = document.getElementById(String(i + "-" + j));
        box.addEventListener("mousedown", () => {
            isDragging = true;
        });
        box.addEventListener("mousemove", () => switchColor(box.id));
        box.addEventListener("mouseup", () => {
            isDragging = false;
        });
    }
}

async function switchColor(cell) {
    let box = document.getElementById(cell);
    if (isDragging) {
        if (document.getElementById("sliderSwitch").checked) {
            colors.forEach((color) => {
                if (box.classList.contains(color + "Entry"))
                    box.classList.remove(color + "Entry");
            });
            box.classList.add(
                document.getElementById("pickColors").value + "Entry"
            );
            if (box.classList.contains("gridOff")) {
                box.classList.remove("gridOff");
            }
            if (box.classList.contains("fadeOut"))
                box.classList.remove("fadeOut");
            box.classList.add("gridOn");
            box.classList.add("fadeIn");
        } else {
            if (box.classList.contains("gridOn")) {
                box.classList.remove("gridOn");
                box.classList.add("fadeOut");
                colors.forEach((color) => {
                    if (box.classList.contains(color + "Entry"))
                        box.classList.remove(color + "Entry");
                });
            }
            if (box.classList.contains("fadeIn"))
                box.classList.remove("fadeIn");
            box.classList.add("gridOff");
        }
    }
}

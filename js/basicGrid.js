let boxSideLength = 25;
let headerOffSet = document.querySelector("#header").offsetHeight;
let numHeightBoxes =
    Math.floor((window.innerHeight - headerOffSet) / boxSideLength) - 1;
let numWidthBoxes = Math.floor(window.innerWidth / boxSideLength) - 1;
for (let i = 0; i < numHeightBoxes; i++) {
    let row = document.createElement("tr");
    row.id = "row " + i;
    document.querySelector("#tableContainer").appendChild(row);
    for (let j = 0; j < numWidthBoxes; j++) {
        let col = document.createElement("td");
        col.id = i + "-" + j;
        col.style.backgroundColor = "#ffffff";
        col.style.borderColor = "#000000";
        document.getElementById("row " + i).appendChild(col);
    }
}

document.querySelector("#clearBtn").addEventListener("click", clearGrid);

async function clearGrid() {
    console.log("a;lsdkjf;asld");
    for (let i = 0; i < numHeightBoxes; i++) {
        for (let j = 0; j < numWidthBoxes; j++) {
            let box = document.getElementById(String(i + "-" + j));
            console.log(box.style.borderColor);
            if (
                box.style.backgroundColor !== "rgb(255, 255, 255)" ||
                box.style.borderColor !== "rgb(0, 0, 0)"
            ) {
                box.classList.remove("fadeIn");
                box.classList.add("fadeOut");
                box.style.backgroundColor = "#ffffff";
                box.style.borderColor = "#000000";
                setTimeout(() => box.classList.remove("fadeOut"), 500);
            }
        }
    }
}

document.body.addEventListener("keyup", () => {
    if (event.which === 32) {
        document.querySelector("#sliderSwitch").checked =
            !document.querySelector("#sliderSwitch").checked;
    }
});

let isDragging = false;

document.querySelector("#gridContainer").addEventListener("mouseleave", () => {
    isDragging = false;
});

document.querySelector("#gridContainer").addEventListener("mousedown", () => {
    isDragging = true;
});

document.querySelector("#gridContainer").addEventListener("mouseup", () => {
    isDragging = false;
});

for (let i = 0; i < numHeightBoxes; i++) {
    for (let j = 0; j < numWidthBoxes; j++) {
        let box = document.getElementById(String(i + "-" + j));
        box.addEventListener("click", () => {
            isDragging = true;
            switchColor(box.id);
            isDragging = false;
        });
        box.addEventListener("mousemove", () => {
            switchColor(box.id);
        });
    }
}

async function switchColor(cell) {
    let color = document.querySelector("#colorpicker").value;
    let box = document.getElementById(cell);
    if (isDragging) {
        if (!document.querySelector("#sliderSwitch").checked) {
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

document.getElementById("save").addEventListener("click", () => {
    html2canvas(document.querySelector("#tableContainer")).then((canvas) => {
        let myImage = canvas.toDataURL();
        downloadImage(myImage, "download.png");
    });
});

function downloadImage(myImage, name) {
    let link = document.createElement("a");

    link.download = name;
    link.href = myImage;
    document.body.appendChild(link);
    link.click();
}

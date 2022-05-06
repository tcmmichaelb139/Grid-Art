document.querySelector("#save").addEventListener("click", () => {
    html2canvas(document.querySelector("#tableContainer"), {
        allowTaint: true,
    }).then((canvas) => {
        let myImage = canvas.toDataURL();
        let link = document.createElement("a");
        link.download = "download";
        link.href = myImage;
        document.body.appendChild(link);
        link.click();
    });
});

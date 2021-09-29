
function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function changeImageSize(width) {
    var image = document.getElementById("bilden");
    image.setAttribute("width", width);
}

function changeImage(width) {
    var image = document.getElementById("bilden");
    var imageSrc = image.getAttribute("src");
    console.log(imageSrc)
    if (imageSrc == "bil.jpg") {
        image.setAttribute("src", "annanbil.jpg")
    }
    else
    {
        image.setAttribute("src", "bil.jpg")
    }
}

function changeDate(date) {
    var datum = document.getElementById("date2");
    datum.setAttribute("min", date);
}
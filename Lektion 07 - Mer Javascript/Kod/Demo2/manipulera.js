function changeColor(color)
{
    document.body.style.backgroundColor = color
}


function changeImageSize(widthValue)
{
    var image = document.getElementById("bilden")

    image.setAttribute("width",widthValue )
}

function changeImage() {
    var image = document.getElementById("bilden");
    var imageSrc = image.getAttribute("src");

    if (imageSrc == "bil.jpg") {
        image.setAttribute("src", "annanbil.jpg")
    }
    else
    {
        image.setAttribute("src", "bil.jpg")
    }
}
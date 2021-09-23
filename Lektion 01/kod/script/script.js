function switchlight() {
    let lamp = document.getElementById('lampImg')

    var index = lamp.src.lastIndexOf("/");
    var filename = lamp.src;
    if(index !== -1) {     
        filename = lamp.src.substring(index+1,lamp.src.length);
    }
    console.log(filename)
    if (filename == "light_off.png") {
        lamp.src = "light_on.png"
    }
    else{
        lamp.src = "light_off.png"
    }
}

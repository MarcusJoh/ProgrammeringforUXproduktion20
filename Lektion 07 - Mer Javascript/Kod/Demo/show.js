var demo = document.getElementById("demo")
demo.innerHTML = "Med hjälp av innerHTML: Hejsan världen";

var loop = document.getElementById("demoloop")

for(x=1; x<20; x++)
{
    loop.innerHTML += "<div>" + x + "<div>"
}

function showContent() {
    window.alert("Med window.alert: Hejsan världen");

    document.getElementById("demo").innerHTML = "Med innerHTML: <b>Hejsan världen igen</b>";
  
    console.log("Med console.log: Hejsan världen ");

 
    
    //window.alert("Prova document.write?");
    //document.write("Med document.write: Hejsan världen");
}
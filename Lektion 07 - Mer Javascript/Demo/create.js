function createElement() {

    // Referens till platsen vi vill skapa ett element
    var outelement = document.getElementById("out");

    // Tala om vilket element vi vill skapa
    var spanelement = document.createElement("span");

    // Skapa text som ska finnas inuti det element vi vill skapa
    var textnod = document.createTextNode("Hejsan Svejsan");

    // lägg till texten i det element vi vill skapa
    spanelement.appendChild(textnod);

    // Lägg till elementet i platsen
    outelement.appendChild(spanelement);
}

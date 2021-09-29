function summera()
{
    var tal1 = parseInt(document.getElementById("tal1").value)
    var tal2 = parseInt(document.getElementById("tal2").value)

    document.getElementById("summa").innerHTML = tal1 + tal2 + "<br>"
    document.getElementById("summa").innerHTML += tal1 - tal2 + "<br>"
    document.getElementById("summa").innerHTML += tal1 / tal2 + "<br>"
    document.getElementById("summa").innerHTML += tal1 * tal2 + "<br>"
}
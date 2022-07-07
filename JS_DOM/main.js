function init() {

    let contendedor = document.getElementById("resultado");
    //parrafos
    let p1 = document.createElement("p");
    let p1Texto = document.createTextNode("parrafo1")
    p1.appendChild(p1Texto)


    let p2 = document.createElement("p");
    let p2Texto = document.createTextNode("parrafo2")
    p2.appendChild(p2Texto)


    let p3 = document.createElement("p");
    let p3Texto = document.createTextNode("parrafo3")
    p3.appendChild(p3Texto)

    contendedor.appendChild(p1)
    contendedor.appendChild(p2)
    contendedor.appendChild(p3)

    //

    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://kamite.com.mx/38-mirai-nikki");
    let enlaceTexto = document.createTextNode("Enalace");
    enlace.appendChild(enlaceTexto)

    contendedor.appendChild(enlace)

    //lista
    let lista = document.createElement("ul")
    for (let index = 0; index < 6; index++) {
        let li = document.createElement("li");
        let le = document.createTextNode("Elemento " + index);
        li.appendChild(le);
        lista.appendChild(li);
    }
    contendedor.appendChild(lista);
}

window.onload = init;
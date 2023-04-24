function areaEnCripatadora(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById(" tituloMensaje");
    let imagen1 = document.getElementById("imagen1");
    let parrafo = document.getElementById("parrafo");


    let textoEncriptado = texto.replace(/a/gi,"ai")
                        .replace(/e/gi,"enter")
                        .replace(/i/gi,"imes")
                        .replace(/o/gi,"ober")
                        .replace(/u/gi,"ufat");
                       
    if (texto.length != 0) {
        texto = textoEncriptado;
        tituloMensaje.textContent = "texto encriptado correctamente";
        parrafo.textContent="";
        imagen1.src ="./icons.imajenes/encriptado-de-datos.png desencriptar.png";

    } else { 

        imagen1.src = "./icons.imajenes/desencriptar.png";
        alert("Debe ingreser algun texto valido");

    }


}

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen1 = document.getElementById("imagen1");
  
    let textoEncriptado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoEncriptado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      imagen1.src = "./icons,imajenes/encriptado-de-datos.png";
    } else {
      imagen1.src = "./icons,imajenes/encriptado-de-datos.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal({
        title: "¡Oops!",
        text: "¡Debes ingresar un texto!",
        icon: "error",
        button: "¡Aceptar!",
      });

      
    }
  }
  
  function Desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen1= document.getElementById("imagen1");
  
    let textoEncriptado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value =  textoEncriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        
      imagen1.src = "./icons,imajenes/desifrado.png";
      } else {
        
        imagen1.src = "./icons,imajenes/encriptado-de-datos.png";

        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

        swal({
            title: "¡Oops!",
            text: "¡Debes ingresar un texto!",
            icon: "error",
            button: "¡Aceptar!",
          });
 

      
        
        
      }
  }
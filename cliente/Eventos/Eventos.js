"use strict";
class Evento {
    constructor() {}
       
  // Version 1.1 23/10/2021  
  leerArchivoTexto(files) 
  { 
      //Coge solo un archivo
      var archivo = document.getElementById("archivo").files[0];
      var nombre = document.getElementById("nombreArchivo");
      var tamaño = document.getElementById("tamañoArchivo");
      var tipo = document.getElementById("tipoArchivo");
      var ultima = document.getElementById("ultimaModificacion");
      var contenido = document.getElementById("contenidoArchivo");
      var areaVisualizacion = document.getElementById("areaTexto");
      var errorArchivo = document.getElementById("errorLectura");
      nombre.innerText = "Nombre del archivo: " + archivo.name;
      tamaño.innerText = "Tamaño del archivo: " + archivo.size + " bytes"; 
      tipo.innerText = "Tipo del archivo: " + archivo.type;
      ultima.innerText = "Fecha de la última modificación: " + archivo.lastModifiedDate;
      contenido.innerText="Contenido del archivo de texto:"
      //Admite archivos de texto (capado a xml en el propio input)
      var tipoTexto = /text.*/;
      if (archivo.type.match(tipoTexto)) 
        {
          var lector = new FileReader();
          lector.onload = function (evento) {
            areaVisualizacion.innerText = lector.result;
            }      
          lector.readAsText(archivo);
          }
      else {
          errorArchivo.innerText = "Error : ¡¡¡ Archivo no válido !!!";
          }       
  };

  consumirServicio() {
    var evento = new Object();
    evento.apikey = "2609d177-e1e5-4545-bca7-aa3e534513df";
    evento.url = "https://musicbrainz.org/ws/2/artist/" + evento.apikey + "?inc=aliases&fmt=json";
    evento.error = "<h2>¡problemas! No puedo obtener información de <a href='https://musicbrainz.org'>MusicBrainz</a></h2>";
        $.ajax({
            dataType: "json",
            url: evento.url,
            method: 'GET',
            success: function(data){
              evento.datos = data;
              document.getElementById("cabeceraJson").innerHTML = "Datos en JSON desde <a href='https://musicbrainz.org'>MusicBrainz</a>";
              document.getElementById("json").innerText = "JSON:";
              var str = JSON.stringify(evento.datos, null, 2);
              document.getElementById("contenidoServicio").innerText = str;    
            },
            error:function(){
                document.write(evento.error);    
            }
        });
  }
}
var evento = new Evento();
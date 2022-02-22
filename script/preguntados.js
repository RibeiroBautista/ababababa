
//---------------------------- PREGUNTADOS ----------------------------
//EN ESTE JUEGO DEBERÁ RESPONDER LAS PREGUNTAS QUE SE LE PRESENTAN CORRECTAMENTE PARA GANAR. DE LO CONTRARIO SI RESPONDE UNA O MAS RESPUESTAS INCORRECTAS, DEBERÁ REINICIAR EL JUEGO "F5".
const ejecutarPreguntados = () => {

    alert("Las respuestas deberás escribirlas sin mayusculas ni caracteres raros. Dicho esto... ¡Que comiencen las preguntas!")
    for( let i = 0; i < arrayPreguntas.length; i++ ){
        hacerPregunta(i);
    }
    
    //---------------------------- VERIFICACIÓN DE PREGUNTADOS ----------------------------
    //AQUÍ ESTÁ LA VERIFICACIÓN DE EL USUARIO AL TERMINAR LAS PREGUNTAS.
    
    let verificacion = true
    
    for( let i = 0; i < arrayPreguntas.length; i++){
        if(arrayPreguntas[i].respuestaCorrecta != arrayPreguntas[i].respuesta){
            verificacion = verificacion && false;
        } 
    }
    
    if(!verificacion){
        swal({
            text: "Una o más de tus respuestas están mal. Fin del juego!",
            icon: "warning",
            dangerMode: true,
            });
    } else {
        swal({
            title: "¡Bien Hecho!",
            text: "¡FELICITACIONES! ¡RESPONDISTE TODAS LAS PREGUNTAS CORRECTAMENTE!. Aquí está tu premio.",
            icon: "success",
            button: "ok",
            });
        document.write('<img src="../img/ganador.jpg" width="300px" height="300px"/>');
    }
    
    //---------------------------- ARRAY APLICADO ----------------------------
    
/*     for(let i = 0; i<arrayPreguntas.length; i+=1){
        document.write(`

        <div class="respuestas">${arrayPreguntas[i].respuesta}</div> <br>

        `);//Manipulé un poco el DOM con este for para que todas las respuestas queden con las propiedades que le asigné a la clase "respuestas". En el html "bienvenido.html" aparecen las propiedades en la etiqueta "style"
    }  */
}


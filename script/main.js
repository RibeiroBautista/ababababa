class Pregunta {

    constructor(id, pregunta, opciones, respuesta, respuestaCorrecta) {
        this.id = id;
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
        this.respuestaCorrecta = respuestaCorrecta;
    }
    
}

/**
 * Funciones
 */

const hacerPregunta = (i) => {
    alert(arrayPreguntas[i].pregunta);
    arrayPreguntas[i].respuesta = prompt(arrayPreguntas[i].opciones);
    alert(`Respondiste ${arrayPreguntas[i].respuesta}`);
}

// ---------------------------- DECLARACIÓN DE VARIABLES ----------------------------

/* Preguntas - INICIO */
let pregunta1 = new Pregunta(1, "¿Cuál de estos paises clasificó al mundial QATAR2022?", "Bolivia, Chile, Argentina, Paraguay, Venezuela", "", "argentina");
let pregunta2 = new Pregunta(2, "¿En el año de 2021, un equipo de ESports de CS:GO salió campeón de el más importante torneo de la historia de CS:GO. ¿Cuáles de los siguientes equipos fué?", "Gambit, NaVi, Vitality, NIP, Heroic", "", "navi");
let pregunta3 = new Pregunta(3, "¿En qué año el SARS-COV-2 arrazó con la población mundial del planeta tierra?", "2017, 2018, 2019, 2020, 2021", "", "2019");
let pregunta4 = new Pregunta(4, "¿Qué apodo te ponen en un videojuego si no sabes jugarlo?", "Noob, Novato, maleta, carreado, incarreable", "", "noob");
let arrayPreguntas = [];
arrayPreguntas.push(pregunta1);
arrayPreguntas.push(pregunta2);
arrayPreguntas.push(pregunta3);
arrayPreguntas.push(pregunta4);
/* Preguntas - FIN */

let presentacion;
let moneda = true;
let preguntados = true;
const cara = 1;
const cruz = 2;

// ---------------------------- DESICION ----------------------------

// AQUÍ EL USUARIO DEBERÁ DECIDIR SI JUGAR O NO JUGAR.
presentacion = prompt("¿Quieres jugar a un juego? 'si / no'").toLowerCase();
if (presentacion==="si"){
    // SI LA RESPUESTA ES SI, EL USUARIO DEBERÁ DECIDIR QUÉ JUEGO JUGAR.
    alert("Escoge uno de estos juegos");
    //SI SE DECIDE POR "moneda" JUGARÁ CARA O CRUZ.
    //SI SE DECIDE POR "preguntados" JUGARÁ AL PREGUNTADOS.
    eleccion = prompt("Moneda / Preguntados").toLowerCase();
} else if (presentacion==="no"){
    //SI LA RESPUESTA FUE NO, EL SITIO LE DIRÁ LO SIGUIENTE...
    alert("De acuerdo. ¡Nos vemos pronto! <3")
}

// ----------------------------   JUEGOS   --------------------------- 

if(eleccion === "preguntados"){
    ejecutarPreguntados();
}

let buscarElemento;

buscarElemento = document.all;
console.log(buscarElemento);

/*------------------------------------------------------  ------------------------------------------------------*/

/* Manipulacion del DOM con javaScript */
//AGREGO UN ARREGLO
const respuestasDOM = [
    {
        id: 1,
        respuesta: (arrayPreguntas[0].respuesta),
    },
    {
        id: 2,
        respuesta: (arrayPreguntas[1].respuesta),
    },
    {
        id: 3,
        respuesta: (arrayPreguntas[2].respuesta),
    },
    {
        id: 4,
        respuesta: (arrayPreguntas[3].respuesta),
    },
];

const contenedorRespuestas = document.querySelector(".containerRespuestas");
const eventoClick = document.querySelector(".click");
const clicks = [];

document.addEventListener('DOMContentLoaded', () => {
    mostrarRespuestas();
})

function mostrarRespuestas () {
    for (const item of respuestasDOM) {

        const verRespuesta = document.createElement('h2');
        verRespuesta.classList.add('respuestas');
        verRespuesta.textContent = item.respuesta;
        verRespuesta.onclick = () => {
            cambiarColor(item.id);
        }

        contenedorRespuestas.appendChild(verRespuesta);

    }
}

function cambiarColor(id) {
    const encontrarRespuestas = respuestasDOM.find( respuesta => respuesta.id === id)
    clicks.push(encontrarRespuestas)
    mostrarClicks(clicks);
}

function mostrarClicks(clickEvent) {

    eventoClick.innerHTML = ""

    for (const item of clickEvent) {
        const verRespuesta = document.createElement('h2');
        verRespuesta.classList.add('respuestas');
        verRespuesta.textContent = item.respuesta;

        eventoClick.appendChild(verRespuesta);
        
    }
    
}

/*

BUENO HASTA ACÁ LLEGUÉ, EN HACER QUE CUANDO VOS HAGAS CLICK, SE MUESTRE EN LA PANTALLA LA RESPUESTA QUE LE HICISTE CLICK DENTRO DE UN CONTAINER YA CREADO PARA QUE QUEDE MAS PROLIJO.
LO QUE QUERIA HACER SEGUIDO A ESO, ERA QUE CUANDO YA HICISTE CLICK, NO VUELVA A APARECER LA RESPUESTA A LA QUE YA LE HABIAS HECHO CLICK. POR EJEMPLO: LE HACES CLICK A LA RESPUESTA N°1 "ARGENTINA", SE ESCRIBE ESA MISMA RESPUESTA N°1 EN EL CONTAINER DE ABAJO... PERO SI LE VOLVES A HACER CLICK, LA VUELVE A ESCRIBIR TODAS LAS VECES QUE VOS LE HAGAS CLICK. QUEDARÍA ALGO ASÍ...

ARGENTINA
ARGENTINA
ARGENTINA
ARGENTINA
ARGENTINA

*/
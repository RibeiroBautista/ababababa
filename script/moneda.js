// ---------------------------- CARA O CRUZ ---------------------------- 

//EN ESTE JUEGO, DEBERÁ DE PENSAR QUE HACER SI TOCA CARA Y QUE HACER SI TOCA CRUZ.

if (eleccion==="moneda"){
    let listo;
    do{
        listo !== "listo"
        listo = prompt('escribe "listo" cuando esté decidido que es cara y que es cruz.')
    }while(listo !== "listo")
    moneda = cara + cruz;
    moneda = Math.floor(Math.random()*2)
    if (moneda===0){
        document.write("¡¡¡¡¡¡¡¡ SALIÓ CARA !!!!!!!!")
        document.write('<img src="../img/cara.png" width="300px" height="300px"/>')
    }
    else {
        document.write("¡¡¡¡¡¡¡¡ SALIÓ CRUZ !!!!!!!!")
        document.write('<img src="../img/cruz.png" width="300px" height="300px"/>')
    }
} 
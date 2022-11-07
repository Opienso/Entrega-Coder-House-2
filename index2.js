//Declare unas variables(?)
const ObjetosSuelo = [];
const ObjetosInventario = [];
let final = false
////////////////////////////////////////////////////////////////

function Objeto(nombre, estado, descripcion, vivo) { //Aca cree unos objetos
    this.nombre = nombre;
    this.estado = estado;
    this.descripcion = descripcion;
    this.vivo = vivo;
}

const Objeto1 = new Objeto("Gato", "Con sueño", "Lo encontraste durmiendo en el suelo", true)
const Objeto2 = new Objeto("Palo", "Nuevo", "Rama de un árbol, tal vez sirva para algo", false)
const Objeto3 = new Objeto("Hoja", "Arrancada", "Parece ser del palo", false)

ObjetosSuelo.push(Objeto1, Objeto2, Objeto3)

/////////////////////////////////////////////////////////////////////

alert("¡Bienvenido!") //Menu


do {
    do {
        var opcion = 0
        opcion = parseInt(prompt("¿Qué quieres hacer? \n1. Ver el suelo.\n2. Agarrar objeto del suelo\n3. Revisar inventario\n4. Soltar objeto\n5. Ir de aventura"));

        if (opcion > 5 || opcion < 0) {
            alert("Creo que estoy confundido. ¡Intente hacer algo sin sentido!");
            bandera = false;
        }
        else {
            bandera = true;
        }
    } while (bandera === false);

    switch (opcion) {
        case 1:
            VerSuelo(ObjetosSuelo);
            final = false
            break;

        case 2:
            AgregarObjeto(ObjetosSuelo, ObjetosInventario);
            final = false
            break;
        case 3:
            RevisarInventario(ObjetosInventario);
            final = false
            break;

        case 4:
            SoltarObjeto(ObjetosInventario, ObjetosSuelo);
            final = false
            break;

        case 5:
            const vivos = ObjetosInventario.filter((gato) => gato.vivo === true)

            if(vivos.length != 0){
                alert("Guardia: Oye... Ese gato tiene dueño. No te lo puedes llevar")
                alert("(⁠•⁠ ⁠▽⁠ ⁠•⁠;)")
            }

            else{
                let aventura = ObjetosInventario.length

                if (aventura === 0) {
                    alert("Tal vez debería buscar algo que me ayude en mi aventura antes de partir")
                    final = false
                }
                else {
                    alert("La aventura espera. ¡No hay tiempo que perder!")
                    final = true
                }
            }
            break;
        default: alert("wtf amigo");
            break;
    }

} while (final === false);


////////////////////////////////////////////
function VerSuelo(ObjetosSuelo) {
    let suelo = ObjetosSuelo.length

    if (suelo === 0) {
        alert("No hay nada en el suelo")
    }
    else {
        ObjetosSuelo.forEach((ObjetosPiso) => {
            alert("En el suelo hay: " + ObjetosPiso.nombre)
        });
    }
}
///////////////////////////////////////////////
function AgregarObjeto(ObjetosSuelo, ObjetosInventario) {

    let vacio = ObjetosSuelo.length

    if (vacio != 0) {

        do { //Tengo que ponerlo dentro de un if, condicion de si el suelo esta vacio o no
            var agarrar = 0
            agarrar = parseInt(prompt("¿Agarrar objeto del suelo?\n1. Sí \t2. No"))
            if (agarrar < 0 || agarrar > 2) {
                alert("Creo que no entendi bien la pregunta...")
                bandera2 = false
            }
            else {
                bandera2 = true
            }
        } while (bandera2 === false);

        if (agarrar === 1) {
            do {
                var seleccionar = 0
                seleccionar = parseInt(prompt("Agarrar: \n1. Gato \n2. Palo \n3. Hoja"))

                if (seleccionar < 0 || seleccionar > 3) {
                    alert("*Intentas agarrar tierra*\nTal vez no fue una buena idea...")
                }
            } while (seleccionar < 0 || seleccionar > 3);

            switch (seleccionar) {
                case 1:

                    let buscar = ObjetosSuelo.find((animal) => animal === Objeto1);

                    if (buscar != null) {
                        let cortar = ObjetosSuelo.indexOf(Objeto1)
                        alert("Agregas el gato a tu inventario...")
                        ObjetosSuelo.splice(cortar, 1)
                        ObjetosInventario.push(Objeto1)
                    }
                    else {
                        alert("¡Este objeto ya está en mi mochila!")
                    }
                    break;

                case 2:
                    let hola2 = ObjetosSuelo.find((Palo) => Palo === Objeto2);

                    if (hola2 != null) {
                        let cortar2 = ObjetosSuelo.indexOf(Objeto2)
                        alert("Agregas el palo a tu inventario...")
                        ObjetosSuelo.splice(cortar2, 1)
                        ObjetosInventario.push(Objeto2)
                    }
                    else {
                        alert("¡Este objeto ya está en mi mochila!")
                    }
                    break;

                case 3:
                    let hola3 = ObjetosSuelo.find((hoja) => hoja === Objeto3);

                    if (hola3 != null) {
                        let cortar3 = ObjetosSuelo.indexOf(Objeto3)
                        alert("Agregas la hoja a tu inventario...")
                        ObjetosSuelo.splice(cortar3, 1)
                        ObjetosInventario.push(Objeto3)
                    }
                    else {
                        alert("¡Este objeto ya está en mi mochila!")
                    }
                    break;
            }
        }
    }
    else {
        alert("¡No queda nada en el suelo!")
    }
}
///////////////////////////////////////////
function RevisarInventario(ObjetosInventario) {
    let inventario = ObjetosInventario.length

    if (inventario === 0) {
        alert("¡No llevo nada en mi mochila!")
    }
    else {
        alert("En mi mochila hay")
        for (const objetosMochila of ObjetosInventario) {
            alert("Nombre: " + objetosMochila.nombre + "\nEstado: " + objetosMochila.estado + "\nDescripcion: " + objetosMochila.descripcion)
        }
    }

}
///////////////////////////////////////////
function SoltarObjeto(ObjetosInventario, ObjetosSuelo) {
    let inventario = ObjetosInventario.length

    if (inventario === 0) {
        alert("No llevo nada que pueda soltar (⁠･ั⁠ω⁠･ั⁠)")
    }
    else {

        do {
            var soltar = 0
            soltar = parseInt(prompt("¿Qué quiero soltar? \n1. Gato \n2. Palo \n3. Hoja"))

            if (soltar < 0 || soltar > 3) {
                alert("Creo que me confundí...")
            }
        } while (soltar < 0 || soltar > 3);

        switch (soltar) {
            case 1:
                let incluye = ObjetosInventario.includes(Objeto1)

                if (incluye === true) {
                    let quitar = ObjetosInventario.indexOf(Objeto1)

                    ObjetosInventario.splice(quitar, 1)
                    ObjetosSuelo.push(Objeto1)
                    alert("Quitas el gato de tu inventario")
                }
                else {
                    alert("¡No puedes soltar lo que no tienes!")
                }

                break;

            case 2:
                let incluye2 = ObjetosInventario.includes(Objeto2)

                if (incluye2 === true) {
                    let quitar2 = ObjetosInventario.indexOf(Objeto2)

                    ObjetosInventario.splice(quitar2, 1)
                    ObjetosSuelo.push(Objeto2)
                    alert("Quitas el palo de tu inventario")
                }
                else {
                    alert("¡No puedes soltar lo que no tienes!")
                }

                break;

            case 3:
                let incluye3 = ObjetosInventario.includes(Objeto3)

                if (incluye3 === true) {
                    let quitar3 = ObjetosInventario.indexOf(Objeto3)

                    ObjetosInventario.splice(quitar3, 1)
                    ObjetosSuelo.push(Objeto3)
                    alert("Quitas la hoja de tu inventario")
                }
                else {
                    alert("¡No puedes soltar lo que no tienes!")
                }

                break;

            default:
                break;
        }
    }
}




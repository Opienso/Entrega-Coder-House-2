AgregarObjetos(ObjetosSuelo, ObjetosInventario);{
    alert("holi")
        do { //Tengo que ponerlo dentro de un if, condicion de si el suelo esta vacio o no
            var agarrar = 0
            agarrar = parseInt(prompt("¿Agarrar objeto del suelo?\n1. Sí \t2. No"))
            if (agarrar < 0 || agarrar > 2) {
                alert("Creo que no entendi bien la pregunta...")
                bandera2 = false
            }
            else if(agarrar === 1){
                var seleccionar = 0
                seleccionar = parseInt(prompt("Agarrar: \n1. Gato \n2. Palo \n3. Hoja"))

                switch (seleccionar) {
                    case 1:
                        let esta1 = ObjetosSuelo.Includes(Objeto1)
                        alert(esta1)
                        if (esta1 == true) {
                            ObjetosSuelo.pop(Objeto1)
                            ObjetosInventario.push(Objeto1)
                        }
                        else {
                            alert("¡Este objeto ya está en mi mochila!")
                        }

                        break;
                    case 2:
                        let esta2 = ObjetosSuelo.Includes('Palo')

                        if (esta2 === true) {
                            ObjetosSuelo.pop(Objeto2)
                            ObjetosInventario.push(Objeto2)
                        }
                        else {
                            alert("¡Este objeto ya está en mi mochila!")
                        }
                        break;
                    case 3:
                        let esta3 = ObjetosSuelo.Includes('Hoja')

                        if (esta3 === true) {
                            ObjetosSuelo.pop(Objeto3)
                            ObjetosInventario.push(Objeto3)
                        }
                        else {
                            alert("¡Este objeto ya está en mi mochila!")
                        }
                        break;

                    default:
                        break;
                }
                bandera2 = true
            }
            else {
                alert("Ta bien")
                bandera2 = true
            }
        } while (bandera2 === false);
}

//////////switch solo
switch (seleccionar) {
    case 1:
        let esta1 = ObjetosSuelo.Includes(Objeto1)
        alert(esta1)
        if (esta1 == true) {
            ObjetosSuelo.pop(Objeto1)
            ObjetosInventario.push(Objeto1)
        }
        else {
            alert("¡Este objeto ya está en mi mochila!")
        }

        break;
    case 2:
        let esta2 = ObjetosSuelo.Includes('Palo')

        if (esta2 === true) {
            ObjetosSuelo.pop(Objeto2)
            ObjetosInventario.push(Objeto2)
        }
        else {
            alert("¡Este objeto ya está en mi mochila!")
        }
        break;
    case 3:
        let esta3 = ObjetosSuelo.Includes('Hoja')

        if (esta3 === true) {
            ObjetosSuelo.pop(Objeto3)
            ObjetosInventario.push(Objeto3)
        }
        else {
            alert("¡Este objeto ya está en mi mochila!")
        }
        break;

    default:
        break;
}
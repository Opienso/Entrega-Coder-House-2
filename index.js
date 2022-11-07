let bandera=false;
const arregloObjetos= [];

function Objeto(nombre, estado, descripcion) {
    this.nombre = nombre;
    this.estado = estado;
    this.descripcion = descripcion;
    }

const Objeto1 = new Objeto("Gato", "Sano", "Animal de 4 patas domestico")
const Objeto2 = new Objeto("Alma", "Destrozada", "Entidad abstracta tradicionalmente considerada la parte inmaterial que se le atribuye la capacidad de sentir y pensar.")
const Objeto3 = new Objeto("Piel", "Sucia", "P̖͔͕̪̦͚̟̭̳̗͙̀̔̊̍ͅa͖̘̦̲̫̯̠̣̗͛̐́̐́͆͂̈́̉r̮̰͉̱̎̎͗̾̀͛̇̈̋̆̔eć͍̜̟̲͖̙̀̈́̋̐͋̉̑e͔̫̫̫͎̖̋̽́͛ q͙̙̪̗͓̤͌͒̿̽̐̑̌́̚u̞̟̝͍̞̭̳̐̀̽́̐̀͆͑͂ẽ͎̭͔̭͚̩̦͎̪͉͖́́̈̌͐͂́̚ fu͙̬͓̮͈̙̬̘͊̽̈́̅̄́̀̀ͅe̩͇͔̯̱̲̪͙̱͔̾̈́͊͗̒ͅ å̙̪̳̮̎̉̿̆̔͐̿r̬̣̝̯͒̾̾̇r͎̮̮͚̩̞̖͎̝̯̲͓̄́͐̇̌̄̏̑ầ͔͉͍͚̃́̓͐̅nca̦͍̜̤͙͈̥̟͙̮̾̾͋̈́̅͂̈́͆d̰̗̣̳̖͖͔̠̗̘̰̅̀͂̃͒̆ͅa̪̪͚͓͛̋̿̊̿̚")

alert("H̰͖̖̞͉͎̠̘̳̣͇̅̀̅̌̑̈́́͒̔o̫̖̰̬̰̫̾̓͂̂͛̓̎ͅl͓͚̲̮͈͔͔̙̯̭̔̀̋̂̽̀͆͋͒̅̚ͅͅa̪͚͔̲͈̳̒̋̇͛̇̀͛")

do {
    var opcion = parseInt (prompt("¿Qué quieres hacer? \n1. Mostrar objetos.\n2. Agregar objeto a la bolsa"));

    if (opcion > 2 || opcion < 0)
    {
        alert("Opción ingresada invalida. Ingresa nuevamente");
        bandera = false;
    }
    else
    {
        bandera = true;
    }
} while (bandera === false)


switch (opcion) {
    case 1:
        MostrarObjetos();
        break;

    case 2:
        AgregarObjetos(arregloObjetos);
        break;
    default: alert("wtf amigo");
        break;
}

function MostrarObjetos(){
    alert("Objeto 1\n" + "Nombre: " + Objeto1.nombre + "\nEstado: " + Objeto1.estado + "\nDescripcion: " + Objeto1.descripcion)
    alert("Objeto 2\n" + "Nombre: " + Objeto2.nombre + "\nEstado: " + Objeto2.estado + "\nDescripcion: " + Objeto2.descripcion)
    alert("Objeto 3\n" + "Nombre: " + Objeto3.nombre + "\nEstado: " + Objeto3.estado + "\nDescripcion: " + Objeto3.descripcion)
}

function AgregarObjetos(arregloObjetos){
    alert("¿Qué objeto desea agregar?")
    let eleccion = parseInt(prompt(""))


}



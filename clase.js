class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
    despedir() {
        console.log(`Adiós, ${this.nombre}. ¡Hasta luego!`);
    }

}

const Favio = new Usuario("Favio", 30);
Favio.saludar();
Favio.despedir();
const Felipe = new Usuario("Felipe", 25);
Felipe.saludar();
Felipe.despedir();


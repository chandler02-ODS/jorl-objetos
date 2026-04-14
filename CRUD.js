class Persona{
    #nombre
    #apellpido
    #edad
    constructor(nombre, apellido, edad){
        this.#nombre = nombre
        this.#apellpido = apellido
        this.#edad =  edad
    }
    get nombre() {
        return this.#nombre
    }
    set nombre(nombre) {
        this.#nombre = nombre
    }
    get edad () {
        return this.#edad
    }
    set edad (edad) {
        if (edad < 18) {
            console.log("la persona es menor de edad")
        } else {
            this.#edad = edad
        }
    }
}
const persona1 = new Persona("melany", "Guillen", 25)
persona1.edad = 15
console.log(persona1.edad)
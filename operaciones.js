
var Operaciones = {};


Operaciones.Operacion = class {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    
    calcular() {
        throw new Error("Método abstracto 'calcular' ");
    }
}


Operaciones.Suma = class extends Operaciones.Operacion {
    calcular() {
        return this.num1 + this.num2;
    }
}


Operaciones.Resta = class extends Operaciones.Operacion {
    calcular() {
        return this.num1 - this.num2;
    }
}


Operaciones.Multiplicacion = class extends Operaciones.Operacion {
    calcular() {
        return this.num1 * this.num2;
    }
}


Operaciones.Division = class extends Operaciones.Operacion {
    calcular() {
        if (this.num2 !== 0) {
            return this.num1 / this.num2;
        } else {
            throw new Error("No se puede dividir entre cero.");
        }
    }
}


Operaciones.Potencia = class extends Operaciones.Operacion {
    calcular() {
        return Math.pow(this.num1, this.num2);
    }
}


Operaciones.Raiz = class extends Operaciones.Operacion {
    calcular() {
        if (this.num1 >= 0) {
            return Math.sqrt(this.num1);
        } else {
            throw new Error("No se puede calcular la raíz cuadrada de un número negativo.");
        }
    }
}


Operaciones.Personalizada = class extends Operaciones.Operacion {
    constructor(num1, num2, operacionPersonalizada) {
        super(num1, num2);
        this.operacionPersonalizada = operacionPersonalizada;
    } 
}

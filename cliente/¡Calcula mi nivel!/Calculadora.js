"use strict";
class Calculadora {
    constructor() {
        this.pila = [];
        this.memoria = 0;
    }

    calcular() {
        var poder = document.getElementById('poder_fisico').value;
        var ki = document.getElementById('nivel_ki').value;
        var velocidad = document.getElementById('velocidad').value;
        var resistencia = document.getElementById('resistencia_fisica').value;
        if(poder == "" || ki == "" || velocidad == "" || resistencia == ""){
            alert("¡Necesito todos tus datos!");
        }else{
            try {
            document.getElementById('resultado').value=((poder*2)+(ki*1.50)+(velocidad*1.15))*(resistencia/1000);

            document.getElementById('super_saiyan').hidden = false;
            document.getElementById('super_saiyan').disabled = false;
            document.getElementById('super_namek').hidden = false;
            document.getElementById('super_namek').disabled = false;
            document.getElementById('forma_final').hidden = false;
            document.getElementById('forma_final').disabled = false;
            document.getElementById('forma_pura').hidden = false;
            document.getElementById('forma_pura').disabled = false;
            
            document.getElementById('poder_fisico').disabled = true;
            document.getElementById('nivel_ki').disabled = true;
            document.getElementById('velocidad').disabled = true;
            document.getElementById('resistencia_fisica').disabled = true;

            document.getElementById('calcula').disabled = true;

            document.getElementById('restart').hidden = true;
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert(e.message);
                } else {
                    throw (e);
                }
            } 
        }
    }

    forma_superSaiyan() {
        try {
            document.getElementById('resultado').value = document.getElementById('resultado').value*50;
            document.getElementById('super_saiyan').hidden = true;
            document.getElementById('super_namek').hidden = true;
            document.getElementById('forma_final').hidden = true;
            document.getElementById('forma_pura').hidden = true;
            document.getElementById('restart').hidden = false;
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert(e.message);
                } else {
                    throw (e);
                }
            } 
    }

    forma_superNamek() {
        try {
            document.getElementById('resultado').value = document.getElementById('resultado').value*10;
            document.getElementById('super_saiyan').hidden = true;
            document.getElementById('super_namek').hidden = true;
            document.getElementById('forma_final').hidden = true;
            document.getElementById('forma_pura').hidden = true;
            document.getElementById('restart').hidden = false;
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert(e.message);
                } else {
                    throw (e);
                }
            } 
    }

    forma_final() {
        try {
            document.getElementById('resultado').value = document.getElementById('resultado').value*25;
            document.getElementById('super_saiyan').hidden = true;
            document.getElementById('super_namek').hidden = true;
            document.getElementById('forma_final').hidden = true;
            document.getElementById('forma_pura').hidden = true;
            document.getElementById('restart').hidden = false;
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert(e.message);
                } else {
                    throw (e);
                }
            } 
    }

    forma_pura() {
        try {
            document.getElementById('resultado').value = document.getElementById('resultado').value*0;
            document.getElementById('super_saiyan').disabled = true;
            document.getElementById('super_namek').disabled = true;
            document.getElementById('forma_final').disabled = true;
            document.getElementById('forma_pura').disabled = true;
            document.getElementById('restart').hidden = false;
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert(e.message);
                } else {
                    throw (e);
                }
            } 
    }

    restart(){
        window.location.reload();
    }
}
var pila = new Calculadora();

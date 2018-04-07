function prueba(numero) {
    let sum = 0;

    for (let index = 0; index <= 10; index++) {
        const element = index * index;
    
        sum = sum + element
    }

    switch (numero) {
        case 1:
            console.log('Soy el numero 1');
            break;

        case 2:
            console.log('Soy el numero 2');
            break;

        default:
            console.log('Soy otro numero');
            break;
    }

    let funcion = function (params) {
        params * 2;
    }

    let objeto = {
        nombre: 'objeto 1',
        calzado: 9,
        metodo: function (params) {
            return params;
        },
        mascotas: [{
            nombre: 'Firulais',
            edad: 8,

        }, {
            nombre: 'Alejandro',
            edad: 21
        }
        ]
    }

    let objeto2 = {
        arreglo: [
            persona1 = {
                nombre: per,
                direcciones: ['dir1', 'dir2']
            }
        ]
    }

    console.log(funcion(2));

    (function() {
        console.log('Soy una funcion');
    })();

    console.log(objeto.mascotas[0].nombre);

    (function(obj) {
        for (let mascota of obj) {
            console.log(mascota);
            
        }
    })(objeto.mascotas);

    for (let key in objeto) {
        console.log(key);
        console.log(objeto[key]);
    }

    return sum;
}

prueba(9);
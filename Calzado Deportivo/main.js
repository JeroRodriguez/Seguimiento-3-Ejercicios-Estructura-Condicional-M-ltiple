// Variables 
const precioTenisClasico = 500000;
const precioTenisRunner = 800000;
const precioTenisBasket = 1000000;

const idClasico = 1;
const idRunner = 2;
const idBasket = 3;

let talla; 
let cantidad;
let precioTotal;  

// Funcionamiento
let tenisSeleccionado = parseInt(prompt(`Ingrese un digito del 1 al 3, esto será el tipo de tenis que desea comprar siendo: \n 1: Tenis clasicos: $500.000 \n 2: Tenis Running: $800.000 \n 3: Tenis Basket: $1'000.000`))

if(tenisSeleccionado > 3 || tenisSeleccionado < 1) {
    alert(`Ingrese un digito valido del 1 al 3`)
} else {
    talla = parseInt(prompt(`Ingrese su talla; tenemos desde 35 hasta 44`));
    if (talla < 35 || talla > 44) {
        alert(`Solo tenemos tallas desde 35 - 44`)
    } else {
        cantidad = parseInt(prompt(`Que cantidad desea llevar: Puede llevar hasta 5`));
        if (cantidad < 1 || cantidad > 5) {
            alert(`Ingrese una cantidad correcta comprendida entre 1 y 5`); 
        } else if (cantidad >= 1 && cantidad < 3) {
            switch(tenisSeleccionado) {
                case idClasico:
                    precioTotal = precioTenisClasico * cantidad;
                    alert(`El total a pagar es $${precioTotal}, la talla que eligio fue ${talla} y el total de items seleccionado es ${cantidad}, ¡Muchas gracias por su compra!`)
                    break;
                case idRunner:
                    precioTotal = precioTenisRunner * cantidad;
                    alert(`El total a pagar es $${precioTotal}, la talla que eligio fue ${talla} y el total de items seleccionado es ${cantidad}, ¡Muchas gracias por su compra!`)
                    break;
                case idBasket:
                    precioTotal = precioTenisBasket * cantidad;
                    alert(`El total a pagar es $${precioTotal}, la talla que eligio fue ${talla} y el total de items seleccionado es ${cantidad}, ¡Muchas gracias por su compra!`)
                    break;
            }  
        } else if (cantidad >= 3 && cantidad <= 5){
            switch(tenisSeleccionado) {
                case idClasico:
                    precioTotal = (precioTenisClasico * cantidad) - ((precioTenisClasico * cantidad) * 0.1 );
                    alert(`El precio total a pagar es $${precioTotal}, la talla que eligio fue ${talla} y el total de items seleccionado es ${cantidad} y ha recibido un descuento del 10% por una compra mayor a 3 items ¡Muchas gracias por su compra!`)
                break;
                case idRunner:
                    precioTotal = (precioTenisRunner * cantidad) - ((precioTenisRunner * cantidad) * 0.1 );
                    alert(`El precio total a pagar es $${precioTotal}, la talla que eligio fue ${talla} y el total de items seleccionado es ${cantidad} y ha recibido un descuento del 10% por una compra mayor a 3 items ¡Muchas gracias por su compra!`)
                break;
                case idBasket:
                    precioTotal = (precioTenisBasket * cantidad) - ((precioTenisBasket * cantidad) * 0.1 );
                    alert(`El precio total a pagar es $${precioTotal}, la talla que eligio fue ${talla} y el total de items seleccionado es ${cantidad} y ha recibido un descuento del 10% por una compra mayor a 3 items ¡Muchas gracias por su compra!`)
                break;
            }
        } else {
            alert(`Ha ocurrido un problema con los datos ingresados`);
        }
    }
}





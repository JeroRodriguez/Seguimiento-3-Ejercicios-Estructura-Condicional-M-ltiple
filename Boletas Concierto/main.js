// Variables 
const precioGeneral = 50000;
const precioPreferencial = 150000;
const precioVip = 300000;

const servicioBoleta = 5000;

let cantidad;
let precioTotal;

// Funcionamiento 
let localidadElegida = parseInt(prompt(`Indique por favor la localidad en la que desea comprar sus boletas para el concierto, siendo: \n 1. Localidad General $50.000 \n 2. Localidad Preferencial $150.000 \n 3. Localidad VIP $300.000`));

switch (localidadElegida) {
    case 1: 
        precioTotal = precioGeneral;
        break;
    case 2:
        precioTotal = precioPreferencial;
        break;
    case 3: 
        precioTotal = precioVip;
        break;
    default: 
        alert(`El digito ingresado es incorrecto por favor digite un numero sea 1, 2 o 3`);
        break;
}

cantidad = parseInt(prompt(`Digite la cantidad de boletas que desea comprar, en una sola transacción puede comprar min. 1 - max. 5`));
if (cantidad < 1 || cantidad > 5) {
    alert(`Solo puede llevar min. 1 boleta hasta max. 5 boletas; ha pedido ${cantidad} y esto es un valor invalido, Por favor ingresar un valor que sea valido`)
} else {
    precioTotal = (precioTotal * cantidad) + (servicioBoleta * cantidad);
}

let metodoDePago = parseInt(prompt(`Ingrese el metodo de pago que deseé solo tenemos 1. Efectivo o 2. Tarjeta de Credito; Ingrese un valor valido.`))
if(metodoDePago < 1 || metodoDePago > 2){
    alert(`Por favor ingresar un metodo de pago que sea valido. Digite un numero sea 1 o 2`)
} else {
    precioTotal *= 0.1;
    alert(`Su compra ha sido un exito. El total ha sido $${precioTotal} se le ha sumado el 10% del valor total y $5.000 adicionales por cada boleta comprada; la cantidad pedida es ${cantidad} boletas. ¡Gracias por confiar en nosotros!`);
}

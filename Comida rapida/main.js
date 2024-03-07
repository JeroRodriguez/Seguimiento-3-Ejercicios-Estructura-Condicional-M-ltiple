// Variables 
const restauranteBurguer = 1;
const restaurantePizza = 2;
const restauranteChino = 3;

const precioHamburguesaSimple = 25000; 
const precioHamburguesaDoble = 27000; 
const precioPizzaPersonal = 30000; 
const precioPizzaFamiliar = 85000; 
const precioFideosPollo = 23000; 
const precioFideosCarne = 20000;

const precioEnvio = 5000;
const precioMin = 23000;

let seleccionMenu;
let metodoDePago;

let cantidad;
let precioTotal;

// Funcionamiento 
let seleccionRestaurante = parseInt(prompt(`Ingrese un dígito de su selección de restaurante siendo: \n 1. Restaurante de hamburguesas \n 2. Restaurante de Pizza \n 3. Restaurante de comida China`));

if(seleccionRestaurante == restauranteBurguer ) {
    seleccionMenu = parseInt(prompt(`Seleccione el menú de la hamburguesería siendo: \n 1. Hamburguesa simple $25.000 \n 2. Hamburguesa Doble $27.000`));

    switch (seleccionMenu) {
        case 1: 
        precioTotal = precioHamburguesaSimple;
        break;
        case 2: 
        precioTotal = precioHamburguesaDoble;
        break;
        default:
            alert(`El dígito ingresado no es válido, recuerde que solo tenemos 2 opciones; ingrese 1 o 2`);
            break;
    }
} else if ( seleccionRestaurante == restaurantePizza ) {
    seleccionMenu = parseInt(prompt(`Seleccione el menú de la Pizzería siendo: \n 1. Pizza Personal $30.000 \n 2. Pizza familiar $85.000`));
    
    switch (seleccionMenu) {
        case 1:
            precioTotal = precioPizzaPersonal;
            break;
        case 2:
            precioTotal = precioPizzaFamiliar;
            break;
        default: 
            alert(`El dígito ingresado no es válido, recuerde que solo tenemos 2 opciones; ingrese 1 o 2`);
            break;
    }
} else if ( seleccionRestaurante == restauranteChino ) {
    seleccionMenu = parseInt(prompt(`Seleccione el menú del restaurante Chino siendo: \n 1. Fideos con Pollo $18.000 \n 2. Fideos con Carne $20.000`));

    switch (seleccionMenu) {
        case 1:
            precioTotal = precioFideosPollo;
            break;
        case 2:
            precioTotal = precioFideosCarne;
            break;
        default: 
            alert(`El dígito ingresado no es válido, recuerde que solo tenemos 2 opciones; ingrese 1 o 2`);
            break;
    }
} else {
    alert(`El dígito ingresado no es válido, recuerde que solo tenemos 3 opciones; ingrese 1, 2 o 3`);
}

cantidad = parseInt(prompt(`Elige la cantidad min. 1 - max. 5`))
if(cantidad < 1 || cantidad > 5) {
    alert(`Ingrese una cantidad valida min. 1 - max. 5`);
} else {
    precioTotal *= cantidad;
}

if ( precioTotal < precioMin ) {
    alert( `Su compra debe ser igual o superior a $23.000`);
} else {
    metodoDePago = parseInt(prompt(`Tenemos tres métodos de pago. \n 1. Débito \n 2. Crédito \n 3. Efectivo`))
    if ( metodoDePago < 1 || metodoDePago > 3 ) {
        alert(`El método de pago elegido no es válido. Ingrese 1, 2 o 3`);
    } else {
        precioTotal += precioEnvio;
        alert(`El costo total de su pedido será $${precioTotal}, incluyendo el envío y se demorará aproximadamente de 45 minutos a 1 hora. ¡Gracias por su compra!`);
    }
}


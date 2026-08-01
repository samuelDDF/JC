let precio = 20000



const nombre = "Cafe aroma"




const total = precio + 2000;

const esCaro = precio > 30000;


const hayStock = true
const hayDescuento = true


const puedeComrpar= hayStock && hayDescuento;

   





if (precio < 200000){
    console.log("El precio es menor 20 mil")
} else if(precio > 20000){
    precio = precio * 0.9
}

let costoEnvio=3000;

function precioConDescuento(precio, porcentaje){
    const valorDescuento = precio * (porcentaje / 100);
    return precio - valorDescuento;
}

function precioConInpuesto(precio, porcentaje){
    const impuesto = precio * (porcentaje / 100);
    return precio + impuesto;
}

function calcularTotal(precio, cantidad, costoDeEnvio){
    return (precio * cantidad) + costoDeEnvio;
}

console.log(calcularTotal(precio, 3, costoEnvio))
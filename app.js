let causa=prompt("Si desea realizar una colaboración rápida indique si")
while (causa=="si"){

function Producto(Nombre,Descripcion,Precio){
    this.nombre = Nombre
    this.descripcion = Descripcion
    this.precio = Precio
}
const Producto1 = new Producto("1-Árbol","Planta un arbol",600)
const Producto2 = new Producto("2-Refugio de animales","Doná comida a un refugio de animales",600)
const Producto3 = new Producto("3-Mantas","Regalale una manta a una persona en situación de calle",300)

const catalogo = [Producto1,Producto2,Producto3]

let compra = prompt("Indique el número de producto a comprar")
if(compra=1){
    costo=Producto1[2]
}
else{
    if(compra=2){
        costo=Producto2[2]
    }
    else{
        costo=Producto3[2]
    }
}
let cantidad = prompt("ingrese la cantidad que desea donar:")
let interes =1.1
let mediodepago = prompt("Para crédito indique si y para débito indique no")
let resultado= mediodepago=="si"
let valordebito=cantidad*costo
if(resultado){
    let cuotas = prompt("ingrese la cantidad de cuotas: ")
    let valorcuota= (cantidad*costo/cuotas)*interes
    let valortotalcredito=valorcuota*cuotas
    console.log("El valor total a abonar es de:"+ valortotalcredito)
    break
} else{
console.log("El valor total a abonar es de:"+ valordebito)
break
}}

alert("Muchas gracias")
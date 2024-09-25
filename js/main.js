// function calcularGasto() {
//     console.log("Pago por mes de cada aplicación:");
//     let aplicaciones = []
//     let aplicacion
//     let resultado = 0
//     while (true){
//         let nombre = prompt("Ingrese nombre de la aplicación o si quiere cancelar escriba ESC").toLowerCase()
//         if (nombre === "esc")
//             break;
//         else{
//             let precio = parseFloat(prompt("Ingrese precio de la aplicación"))
//             if(precio <= 0 || isNaN(precio)){
//                 alert("Ingrese un número válido")
//                 continue
//             }
//             let anual = prompt("El pago es anual? Indique SI o NO").toLowerCase()
//             if(anual !== "si" && anual !== "no"){
//                 alert("Ingrese únicamente SI o NO.")
//                 continue
//             }
//             aplicacion = {
//                 nombre: nombre,
//                 precio: precio,
//                 anual: anual
//             };
//             aplicaciones.push(aplicacion)
//             if (aplicacion.anual === "si"){
//                     console.log(aplicacion.nombre + "= $" + (aplicacion.precio / 12).toFixed(2));
//                 }
//                 else {
//                         console.log(aplicacion.nombre + "= $" + aplicacion.precio);
//                     }
//                 }
//             }
//             aplicaciones.forEach(aplicacion => {
//                 if(aplicacion.anual === "si"){
//                     resultado +=  aplicacion.precio / 12;
//                 } else{
//                 resultado += aplicacion.precio;}                
//             });
//             console.log("Total gasto mensual: $" + resultado.toFixed(2));
//         }
// calcularGasto()

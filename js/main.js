let libros = [
    {
        id: "libro-01",
        titulo: "El poder de las palabras",
        precio: 27000,
        img: "./img/el-poder-de-las-palabras.jpg",
    },
    {
        id: "libro-02",
        titulo: "Las leyes de la suerte",
        precio: 35000,
        img: "./img/las-leyes-de-la-suerte.jpg",
    },
    {
        id: "libro-03",
        titulo: "Los caballeros de la noche",
        precio: 15000,
        img: "./img/los-caballeros-de-la-noche.jpg",
    },
    {
        id: "libro-04",
        titulo: "Si lo crees lo creas",
        precio: 25000,
        img: "./img/si-lo-crees-lo-creas.jpg",
    },
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let contenedorLibros = document.querySelector("#libros");
let carritoVacio = document.querySelector("#carritoVacio");
let carritoLibros = document.querySelector("#carritoLibros")
let carritoTotal = document.querySelector("#carritoTotal")

libros.forEach((libro) =>{
    let div = document.createElement("div");
    div.classList.add("libro")

    div.innerHTML = `
        <img src=${libro.img}>
        <h2>${libro.titulo}</h2>
        <p>$${libro.precio}</p>
    `;

    let button = document.createElement("button");
    button.classList.add("libroBoton")
    button.innerText = "Agregar al carrito";

    button.addEventListener("click", () =>{
        agregarAlCarrito(libro);
    })

    div.append(button);

    contenedorLibros.append(div)
})

function actualizarCarrito(){
    carritoLibros.innerHTML = "";

    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoLibros.classList.add("d-none")
    } else {
        carritoVacio.classList.add("d-none")
        carritoLibros.classList.remove("d-none")

        carrito.forEach((libro) => {
            let div = document.createElement("div");
            div.classList.add("carritoLibro");
            div.innerHTML= `
                <h3>${libro.titulo}</h3>
                <p>$${libro.precio}</p>
                <p>Cant: ${libro.cantidad}</p>
                <p>subt: $${libro.precio * libro.cantidad}</p>
            `;

            let button = document.createElement("button");
            button.classList.add("carritoLibroButton");
            button.innerText = "Eliminar";
            button.addEventListener("click", () => {
                borrarDelCarrito(libro);
            });
            div.append(button);
            carritoLibros.append(div);
        })
    }
    
    actualizarTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(libro) {
    let itemEncontrado = carrito.find((item) => item.id === libro.id)

    if(itemEncontrado) {
        itemEncontrado.cantidad++;
    } else{
        carrito.push({...libro, cantidad: 1});
    }

    actualizarCarrito()
}

function borrarDelCarrito(libro){
    let indice = carrito.findIndex((item) => item.id === libro.id)
    carrito.splice(indice, 1);

    actualizarCarrito();
}

function actualizarTotal (){
    let total = carrito.reduce((acc, libro) => acc + (libro.precio * libro.cantidad), 0);
    carritoTotal.innerText = `$${total}`;
}

actualizarCarrito();
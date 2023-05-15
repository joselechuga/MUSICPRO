
$(document).ready(function () {

    //LISTA CON PRODUCTOS AÑADIDOS AL CARRITO
    let productosCarrito = []

//CONSUMO E INYECCION DE DATOS EN HTML
    $.get("https://636848caedc85dbc84e49015.mockapi.io/producto",
        function (data) {
            $.each(data, function (i, item) {
                $('#servicio').append(
                    "<div  class='cuadroservicio'>" +
                    "<div class='nombre'>" + "<h3>" + item.name + "</h3>" + "</div>" +
                    "<div class='container'>" +
                    "<img class='img_prod' src= '" + item.image + "' >" +
                    "</div>" +
                    "<div class='container dato'>" + "<h4>" + item.precio + "</h4>" +
                    "</div>" +
                    "<h5 class='desc_serv '>" + item.description + "</h5>" +
                    "<button class='btn btn-primary' >Agregar al carrito</button> " +
                    "</div>")

            })
        }
    );

        const carritoProd = document.getElementById('modalCarrito');

    $('#servicio').on('click',function(e){

        if(e.target.classList.contains('btn')){
            const prod = e.target.parentElement

            const infoProd = {
                quantity:1,
                name: prod.querySelector('h3').textContent,
                precio: prod.querySelector('h4').textContent,
            }
            
            //Existe o no el producto en el carrito - true-false
            const existeProductoCarrito = productosCarrito.some(product => product.name == infoProd.name)
            
            if(existeProductoCarrito){
                const productosCart = productosCarrito.map(product => {
                    if(product.name == infoProd.name){
                        product.quantity++;
                        return product
                    }else{
                        return product
                    }
                })
                //combinando arrays 
                productosCarrito = [...productosCart]
            }else{
                //combinando arrays 
                productosCarrito = [...productosCarrito,infoProd]
                console.log(productosCarrito);
            }
            
            


            mostrarCarrito()
        }
    })
    const mostrarCarrito = () => {

        carritoProd.innerHTML =' ';

        productosCarrito.forEach(producto => {
            const containerProductos = document.createElement('div')
            containerProductos.classList.add('cart-product')
            containerProductos.innerHTML = ` 
           

            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${producto.name}
                    ${producto.precio}
                    <span class="badge bg-primary rounded-pill"> ${producto.quantity}</span>   
                </li>
            </ul>
            `

        carritoProd.append(containerProductos);

        })
    }   
});



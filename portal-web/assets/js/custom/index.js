

$(document).ready(function () {



    //LISTA CON PRODUCTOS AÑADIDOS AL CARRITO
    let productosCarrito = []


//CONSUMO E INYECCION DE DATOS EN HTML
    $.get("https://636848caedc85dbc84e49015.mockapi.io/producto",
        function (data) {
            $.each(data, function (i, item) {
                $('#servicio').append(
                    '<div class="col">'+
                    '<div class="card">'+
                        '<img src="' + item.image +'" class="card-img-top" alt="...">'+
                        '<div class="card-body">'+
                        '<h3 class="card-title">'+ item.name + '</h3>'+
                        '<h4 class="card-text">'+'$'+ item.precio +'</h4>'+
                        "<button class='btn btn-primary' >Agregar al carrito</button> " +
                        '</div>'+
                    '</div>'+
                ' </div>')

            })
            console.log('PRODUCTOS',data)
        }
    );

        const carritoProd = document.getElementById('modalCarrito');

        
        const valorTotal = document.getElementById('totalPago');
        
        let total2 = document.getElementById('total');

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
    });

    const mostrarCarrito = () => {

        carritoProd.innerHTML =' ';
        
        let total = 0;
        let totalProductos = 0;
        let operacion = 0;

        productosCarrito.forEach(producto => {
            const containerProductos = document.createElement('div')
            containerProductos.classList.add('cart-product')
            containerProductos.innerHTML = ` 
            <div class="contenedorCarrito"> 
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        ${producto.name}
                        ${producto.precio}
                        <span class="badge bg-primary rounded-pill"> ${producto.quantity}</span>   
                    </li>
                </ul>
                
            </div>
            `;

            carritoProd.append(containerProductos);
            total = parseInt(producto.precio.slice(1));
            totalProductos = producto.quantity ;
            operacion = (total * totalProductos);
            console.log( 'TOTAL',operacion )
        });

        
        const pagoWeb = document.getElementById('pagoweb');
        pagoWeb.innerHTML = ` 
        <div > 
            <input type="text" class="form-control" id="txt-amount" value="${operacion}" readonly="readonly">
            <button class="btn btn-primary" onclick="create()" >PAGAR</button>
        </div>
        `;
    };


});






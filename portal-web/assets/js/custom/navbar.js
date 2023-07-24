function navbar(){

    //  OBTENER NOMBRE DEL ARCHIVO HTML DONDE FUE INVOCADA LA CARGA DEL
    //  NAVBAR (BARRA DE NAVEGACIÓN O MENÚ)
    const htmlName = window.location.pathname;
    let activeIndex = "";
    let activeCatalogo1 = "";
    let activeCatalogo2 = "";
    let activeCarroCompra= "";

    console.log('PÁGINA SELECCIONADA: ', htmlName);

    /*  VALIDACIÓN PARA MODIFICAR CSS EN EL MENÚ DEJANDO ACTIVO LA PÁGINA ACTUAL*/
    if(htmlName.includes("index.html")){
        activeIndex = " activate text-white";
    }else if(htmlName.includes("catalogo1.html")){
        activeCatalogo1 = " activate text-white";
    }else if(htmlName.includes("catalogo2.html")){
        activeCatalogo2 = " activate text-white";
    }else if(htmlName.includes("carro-compras.html")){
        activeCarroCompra = " activate text-white";
    }

    /*  INTERPOLACIÓN QUE PERMITE REEMPLAZAR EN EL TEXTO LAS VARIABLES  activeCatalogov1, activeCatalogov2
        CON LOS VALORES DEFINIDOS ANTERIORMENTE. 

        https://www.freecodecamp.org/espanol/news/como-utilizar-la-interpolacion-de-cadenas-en-javascript/

    */
    const nav = `
        <nav class="navbar navbar-expand-lg barra" data-bs-theme="dark">
        <div class="container-fluid">
        <a a class="nav-link${activeIndex} linkbarra" href="index.html">
        <div class="iconobarra_titulo">
        <img class="icono" src="https://svgsilh.com/svg/3099712.svg" alt="Bootstrap" width="30" height="24">
        <p class="t_icono">MUSIC</p>
        <p class="t_icono2"> PRO</p>
      </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link${activeIndex} linkbarra" href="index.html">
                    <p class="linkbarra">Inicio</p>
                    </a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link${activeCatalogo1} linkbarra" href="catalogo1.html">
                    <p class="linkbarra">Catalogo</p>
                    </a>
                </li>                 
            </ul>
        </div>
         <button class="btn btngit">
            <a href="https://github.com/joselechuga/MUSICPRO">
                <div class="divgit"> 
                    <img class="imggit" src="https://1000marcas.net/wp-content/uploads/2020/02/logo-GitHub.png" alt="">
                </div>
            </a>
         </button>
        </div>
    </nav>
    `;
    var path = window.location.pathname;
    console.log('OBTENER DIV CON id = navbar');
    const navHTML = document.getElementById("navbar");
    console.log('RENDERIZANDO O REESCRIBIENDO DIV CON id = navbar AGREGANDO LA INFORMACIÓN DE LA VARIABLE navHTML');
    /* SE REESCRIBE ESTRUCTURA DIV CON INNERHTML

        https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
    */
    navHTML.innerHTML = nav;

}

navbar();
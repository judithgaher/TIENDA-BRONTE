window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log (posicionObj1);
    let tamañoDePantalla = window.innerHeight/3;

    if(posicionObj1 < tamañoDePantalla) 
        animacion.style.animation= 'mover 1s ease-out';

    }

)







// ----------------------------------------SUMAR PRODUCTOS syra--------------------------------------------------


function carro() {
let precio= document.getElementById('precio').value;
let suma= document.getElementById('suma').value;
let subtotal= document.getElementById('subtotal');

// console.log('estoy')

let resultado = precio*suma
subtotal.value = resultado

// console.log('aqui')

}

// ----------------------------------------SUMAR PRODUCTOS Tempranillo-------------------------------------------------


function carro2() {
    let preciob= document.getElementById('precio2').value;
    let sumab= document.getElementById('suma2').value;
    let subtotalb= document.getElementById('subtotal2');
    
    console.log('estoy')
    
    let resultadob = preciob *sumab
    subtotalb.value = resultadob
    
    console.log('aqui')
    
    }
// ----------------------------------------SUMAR PRODUCTOS Cabernet-------------------------------------------------


function carro3() {
    let precioc= document.getElementById('precio3').value;
    let sumac= document.getElementById('suma3').value;
    let subtotalc= document.getElementById('subtotal3');
    
    console.log('estoy')
    
    let resultadob = precioc *sumac
    subtotalc.value = resultadob
    
    console.log('aqui')
    
    }

// ----------------------------------------SUMAR PRODUCTOS Merlot------------------------------------------------


function carro4() {
    let preciod= document.getElementById('precio4').value;
    let sumad= document.getElementById('suma4').value;
    let subtotald= document.getElementById('subtotal4');
    
    // console.log('estoy')
    
    let resultadod = preciod *sumad
    subtotald.value = resultadod
    
    // console.log('aqui')
    
    } 

    










// ----------------------------------------Mandar al carrito-------------------------------------------------

// const addtToShoppingCartButtons= document.querySelectorAll ('.addtocart');
// // console.log ('hola')
// addtToShoppingCartButtons.forEach(addtocCartButton) => {
//     addtocCartButton.addEventListener('click', () => console.log ('click'));
// };


// ----------------------------------------FUNCION CARRITO-------------------------------------------------

/*  let carrito = [];

function carro() {
  let nombre = document.getElementById('nombre').value;
  let precio = document.getElementById('precio').value;
  let cantidad = document.getElementById('cantidad').value;
  let subtotal = precio * cantidad;

  let producto = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
    subtotal: subtotal
  };

  carrito.push(producto);

  // Actualizar el contador del carrito
  let carritoIcono = document.getElementById('carrito');
  let cantidadActual = parseInt(carritoIcono.getAttribute('data-cantidad'));
  carritoIcono.setAttribute('data-cantidad', cantidadActual + 1);

  // Actualizar la descripción de la compra en la modal (opcional)
  actualizarModal();
}

function mostrarModal() {
  actualizarModal();
  document.getElementById('modal').style.display = 'block';
}

function actualizarModal() {
  let listaProductos = document.getElementById('listaProductos');
  listaProductos.innerHTML = '';

  carrito.forEach(function(producto) {
    let item = document.createElement('li');
    item.textContent = producto.nombre + ' (Cantidad: ' + producto.cantidad + ', Precio: ' + producto.precio + ', Subtotal: ' + producto.subtotal + ')';
    listaProductos.appendChild(item);
  });
} 
 */ 

// ----------------------------------------SUMAR PRODUCTOS Merlot------------------------------------------------


    



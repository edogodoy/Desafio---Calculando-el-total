
/////////////////// CODIGO PARA EL CONTADOR DE PRODUCTOS
const btn_menos = document.querySelector("#btn-menos");
const btn_mas = document.querySelector("#btn-mas");
const cantidad_producto = document.querySelector("#cantidad-producto");

let cantidadInicial = 1;
cantidad_producto.textContent = cantidadInicial;

let cantidadActual = parseInt(cantidad_producto.innerHTML);

btn_menos.addEventListener("click", function() {
    if (cantidadActual > 1) {
        cantidadActual--;
        cantidad_producto.innerHTML = cantidadActual;
        actualizarPrecioTotal();
    }
});

btn_mas.addEventListener("click", function() {
    if (cantidadActual < 10)
    cantidadActual++;
    cantidad_producto.innerHTML = cantidadActual;
    actualizarPrecioTotal();
});
/////////////////// CODIGO PARA EL CONTADOR DE PRODUCTOS


/////////////////// CODIGO PARA VISUALIZAR PRECIO
const precioProducto = document.querySelector(".product-price");

let precioUnitario = 2490000;
const precioUnitarioFormateado = precioUnitario.toLocaleString('es-ES');
precioProducto.textContent = '$ ' + precioUnitarioFormateado;

function actualizarPrecioTotal() {
  const precioTotal = precioUnitario * cantidadActual;
  const precioFormateado = precioTotal.toLocaleString('es-ES');
  precioProducto.textContent = '$ ' + precioFormateado;
}
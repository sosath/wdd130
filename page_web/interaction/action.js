let cart = {};
let total = 0;

// Agregar producto al carrito
function addToCart(nombre, precio) {
  if (cart[nombre]) {
    cart[nombre].cantidad += 1;
  } else {
    cart[nombre] = { precio: precio, cantidad: 1 };
  }
  renderCart();
}

// Renderizar el carrito
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  total = 0;

  for (const nombre in cart) {
    const item = cart[nombre];
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    const li = document.createElement('li');
    li.innerHTML = `
      ${nombre} - Bs ${item.precio} x ${item.cantidad} = Bs ${subtotal}
      <button class="remove" onclick="removeFromCart('${nombre}')">❌</button>
    `;
    cartItems.appendChild(li);
  }

  document.getElementById('total').textContent = total.toFixed(2);
}

// Eliminar producto
function removeFromCart(nombre) {
  if (cart[nombre].cantidad > 1) {
    cart[nombre].cantidad -= 1;
  } else {
    delete cart[nombre];
  }
  renderCart();
}

// Vaciar carrito
function clearCart() {
  cart = {};
  total = 0;
  renderCart();
}
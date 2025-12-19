import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart, totals  } = useCart();
  const navigate = useNavigate();

  return (
    <section>
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <>
          <p>El carrito está vacío.</p>
          <p>
            <Link to="/home">Volver a la tienda</Link>
          </p>
        </>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong> – {item.price.toFixed(2).replace(".", ",")} €
                <div>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>Quitar Producto</button>
                </div>
              </li>
            ))}
          </ul>

          <p>
            <strong>Total:</strong>{totals.totalPrice.toFixed(2).replace(".",",")} €
          </p>

          <p>
            <button onClick={() => navigate("/checkout")}>Ir a checkout</button>{" "}
            <button onClick={clearCart}>Vaciar carrito</button>
          </p>
        </>
      )}
    </section>
  );
}

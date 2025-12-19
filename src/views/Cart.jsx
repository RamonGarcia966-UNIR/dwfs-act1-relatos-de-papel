import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
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
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                <strong>{item.title}</strong> –{" "}
                {item.price.toFixed(2).replace(".", ",")} €
                <button onClick={() => removeFromCart(item.id)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <p>
            <button onClick={() => navigate("/checkout")}>Ir a checkout</button>{" "}
            <button onClick={clearCart}>Vaciar carrito</button>
          </p>
        </>
      )}
    </section>
  );
}

import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <section>
        <h2>Carrito</h2>
        <p>El carrito está vacío.</p>
        <button onClick={() => navigate("/home")}>
          Volver a la tienda
        </button>
      </section>
    );
  }

  return (
    <section>
      <h2>Carrito</h2>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>{" "}
            <button onClick={() => removeFromCart(item.id)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate("/checkout")}>
        Ir a checkout
      </button>

      <button onClick={clearCart}>
        Vaciar carrito
      </button>
    </section>
  );
}

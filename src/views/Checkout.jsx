import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePay = () => {
    if (cart.length === 0) {
      alert("No hay productos en el carrito.");
      navigate("/home");
      return;
    }

    alert("Pago realizado con éxito");
    clearCart();
    navigate("/home");
  };

  return (
    <section>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <>
          <p>No hay productos en el carrito.</p>
          <p>
            <Link to="/home">Volver a la tienda</Link>
          </p>
        </>
      ) : (
        <>
          <h3>Resumen</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                {item.title} – {item.price.toFixed(2).replace(".", ",")} €
              </li>
            ))}
          </ul>

          <p>
            <strong>Total:</strong> {total.toFixed(2).replace(".", ",")} €
          </p>

          <button onClick={handlePay}>Pagar</button>
        </>
      )}
    </section>
  );
}

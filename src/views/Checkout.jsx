import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Checkout() {
  const { cart, clearCart, totals } = useCart();
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
    <section className="page__content checkout">
      <h2 className="page__title">Checkout</h2>

      {cart.length === 0 ? (
        <div className="cart__empty">
          <p>No hay productos en el carrito.</p>
          <Link to="/home" className="btn btn--primary">Volver a la tienda</Link>
        </div>
      ) : (
        <div className="checkout__container">
          <div className="checkout__summary">
            <h3 className="checkout__subtitle">Resumen del pedido</h3>
            <ul className="checkout__list">
              {cart.map((item) => (
                <li key={item.id} className="checkout__item">
                  <span className="checkout__item-name">{item.title} x {item.qty}</span>
                  <span className="checkout__item-price">{(item.price * item.qty).toFixed(2).replace(".", ",")} €</span>
                </li>
              ))}
            </ul>

            <div className="checkout__total">
              <span>Total a pagar:</span>
              <span className="checkout__total-val">{totals.totalPrice.toFixed(2).replace(".", ",")} €</span>
            </div>
          </div>

          <div className="checkout__actions">
            <button className="btn btn--primary checkout__btn-pay" onClick={handlePay}>Confirmar y Pagar</button>
            <Link to="/cart" className="btn btn--text">Volver al carrito</Link>
          </div>
        </div>
      )}
    </section>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart, totals } = useCart();
  const navigate = useNavigate();

  return (
    <section className="page cart">
      <h2 className="page__title">Tu Carrito</h2>

      {cart.length === 0 ? (
        <div className="cart__empty">
          <p>El carrito está vacío.</p>
          <Link to="/home" className="btn btn--primary">Volver a la tienda</Link>
        </div>
      ) : (
        <div className="cart__container">
          <ul className="cart__list">
            {cart.map((item) => (
              <li key={item.id} className="cart__item">
                <div className="cart__info">
                  <strong>{item.title}</strong>
                  <span className="cart__price">{item.price.toFixed(2).replace(".", ",")} €</span>
                </div>

                <div className="cart__controls">
                  <div className="cart__qty">
                    <button className="cart__qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
                    <span className="cart__qty-val">{item.qty}</span>
                    <button className="cart__qty-btn" onClick={() => addToCart(item)}>+</button>
                  </div>
                  <button className="cart__remove" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart__summary">
            <div className="cart__total">
              <span>Total</span>
              <span className="cart__total-val">{totals.totalPrice.toFixed(2).replace(".", ",")} €</span>
            </div>

            <div className="cart__actions">
              <button className="btn btn--primary" onClick={() => navigate("/checkout")}>Tramitar Pedido</button>
              <button className="btn btn--outline btn--danger" onClick={clearCart}>Vaciar carrito</button>
            </div>

            <Link to="/home" className="btn btn--text">Seguir comprando</Link>
          </div>
        </div>
      )}
    </section>
  );
}

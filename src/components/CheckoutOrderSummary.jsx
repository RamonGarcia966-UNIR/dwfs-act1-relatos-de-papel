import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

/**
 * CheckoutOrderSummary Component
 * Displays order summary with items list and payment actions
 */
export default function CheckoutOrderSummary() {
    const navigate = useNavigate();
    const { cart, clearCart, totals } = useCart();

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
                <button
                    className="btn btn--primary checkout__btn-pay"
                    onClick={handlePay}
                >
                    Confirmar y Pagar
                </button>
                <Link to="/cart" className="btn btn--text">Volver al carrito</Link>
            </div>
        </div>
    );
}

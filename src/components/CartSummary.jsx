import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

/**
 * CartSummary Component
 * Displays cart total and action buttons
 */
export default function CartSummary() {
    const navigate = useNavigate();
    const { clearCart, totals } = useCart();

    return (
        <div className="cart__summary">
            <div className="cart__total">
                <span>Total</span>
                <span className="cart__total-val">{totals.totalPrice.toFixed(2).replace(".", ",")} €</span>
            </div>

            <div className="cart__actions">
                <button className="btn btn--primary" onClick={() => navigate("/checkout")}>
                    Tramitar Pedido
                </button>
                <button className="btn btn--outline btn--danger" onClick={clearCart}>
                    Vaciar carrito
                </button>
            </div>

            <Link to="/home" className="btn btn--text">Seguir comprando</Link>
        </div>
    );
}

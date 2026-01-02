import { Link } from "react-router-dom";

/**
 * CartEmpty Component
 * Displays message when cart/checkout is empty
 * Reusable in both Cart and Checkout views
 */
export default function CartEmpty() {
    return (
        <div className="cart__empty">
            <p>El carrito está vacío.</p>
            <Link to="/home" className="btn btn--primary">Volver a la tienda</Link>
        </div>
    );
}

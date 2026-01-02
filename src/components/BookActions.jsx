import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

/**
 * BookActions Component
 * Action buttons for book details page (Add to Cart, Go to Cart)
 */
export default function BookActions({ book }) {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    return (
        <div className="book-detail__actions">
            <button
                className="book-detail__btn book-detail__btn--primary"
                onClick={() => addToCart(book)}
            >
                Añadir al carrito
            </button>
            <button
                className="book-detail__btn book-detail__btn--secondary"
                onClick={() => navigate("/cart")}
            >
                Ir al carrito
            </button>
        </div>
    );
}

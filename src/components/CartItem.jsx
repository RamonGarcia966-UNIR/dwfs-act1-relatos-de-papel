import { useCart } from "../hooks/useCart";

/**
 * CartItem Component
 * Displays a single cart item with quantity controls
 */
export default function CartItem({ item }) {
    const { addToCart, decreaseQty, removeFromCart } = useCart();

    return (
        <li className="cart__item">
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
    );
}

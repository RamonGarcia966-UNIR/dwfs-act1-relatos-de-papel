import { useCart } from "../hooks/useCart";
import CartEmpty from "../components/CartEmpty";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

export default function Cart() {
  const { cart } = useCart();

  return (
    <section className="page cart">
      <h2 className="page__title">Tu Carrito</h2>

      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="cart__container">
          <ul className="cart__list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <CartSummary />
        </div>
      )}
    </section>
  );
}


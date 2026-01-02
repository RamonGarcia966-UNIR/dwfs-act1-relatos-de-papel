import { useCart } from "../hooks/useCart";
import CartEmpty from "../components/CartEmpty";
import CheckoutOrderSummary from "../components/CheckoutOrderSummary";

export default function Checkout() {
  const { cart } = useCart();

  return (
    <section className="page checkout">
      <h2 className="page__title">Checkout</h2>

      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <CheckoutOrderSummary />
      )}
    </section>
  );
}


import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "./Layout.css";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="layout__header">
      <Link to="/home">
        <h1>Relatos de Papel</h1>
      </Link>

      <nav className="layout__nav">
        <Link to="/home">Home</Link>
        <Link to="/cart">Carrito ({cart.length})</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "./Layout.css";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="layout__header">
      <Link to="/home" className="layout__brandLink"> 
        <h1 className="layout__brand">Relatos de Papel</h1>
      </Link>

      <nav className="layout__nav">
        <Link className="layout__navLink" to="/home">Home</Link>
        <Link className="layout__navLink" to="/cart">Carrito ({cart.length})</Link>
        <Link className="layout__navLink" to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}

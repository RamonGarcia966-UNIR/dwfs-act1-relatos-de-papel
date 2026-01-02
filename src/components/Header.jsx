import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useEffect, useState } from "react";


export default function Header() {
  const { totals } = useCart();
  const [highlight, setHighlight] = useState(false);

  // Trigger animation when cart count changes
  useEffect(() => {
    if (totals.itemsCount > 0) {
      setHighlight(true);
      const timer = setTimeout(() => setHighlight(false), 500);
      return () => clearTimeout(timer);
    }
  }, [totals.itemsCount]);

  return (
    <header className="layout__header">
      <Link to="/home" className="layout__brandLink">
        <h1 className="layout__brand">Relatos de Papel</h1>
      </Link>

      <nav className="layout__nav">
        <Link className="layout__nav-link" to="/home">Home</Link>
        <Link className="layout__nav-link" to="/cart">
          Carrito (<span className={highlight ? "cart-count-highlight" : ""}>{totals.itemsCount}</span>)
        </Link>
        <Link className="layout__nav-link" to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
}

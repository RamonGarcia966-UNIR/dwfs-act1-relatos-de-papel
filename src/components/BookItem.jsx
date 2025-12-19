import { Link } from "react-router-dom";

export default function BookItem({ book, onAddToCart }) {
  return (
    <li>
      <Link to={`/book/${book.id}`}>{book.title}</Link> – {book.author} –{" "}
      {book.price.toFixed(2).replace(".", ",")} €
      <button onClick={() => onAddToCart(book)}>
        Añadir al carrito
      </button>
    </li>
  );
}

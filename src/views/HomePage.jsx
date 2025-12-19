import { Link } from "react-router-dom";
import { books } from "../data/books";
import { useCart } from "../hooks/useCart";

export default function HomePage() {
  const { addToCart } = useCart();

  return (
    <section>
      <h2>Página principal</h2>

      <p>
        <Link to="/cart">Ver carrito</Link>
      </p>

      <h3>Libros disponibles</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> – {book.author} –{" "}
            {book.price.toFixed(2).replace(".", ",")} €
            <button onClick={() => addToCart(book)}>
              Añadir al carrito
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

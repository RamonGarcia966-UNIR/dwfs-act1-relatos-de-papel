import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { books } from "../data/books";
import { useCart } from "../hooks/useCart";

export default function HomePage() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");

  const filteredBooks = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return books;

    return books.filter((book) =>
      book.title.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <section>
      <h2>Página principal</h2>

      <p>
        <Link to="/cart">Ver carrito</Link>{" "}
        | <Link to="/checkout">Checkout</Link>
      </p>

      <div>
        <label htmlFor="book-search">Buscar</label>
        <input
          id="book-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por título…"
        />
      </div>

      <h3>Libros disponibles</h3>

      {filteredBooks.length === 0 ? (
        <p>No hay resultados para “{search}”.</p>
      ) : (
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link> – {book.author} –{" "}
            {book.price.toFixed(2).replace(".", ",")} €
            <button onClick={() => addToCart(book)}>Añadir al carrito</button>
          </li>
        ))}
      </ul>
    )}
    </section>
  );
}

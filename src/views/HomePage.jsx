import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { books } from "../data/books";
import { useCart } from "../hooks/useCart";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";


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

    <SearchBar value={search} onChange={setSearch} />

      <h3>Libros disponibles</h3>

     <BookList
        books={filteredBooks}
        onAddToCart={addToCart}
      />

    </section>
  );
}

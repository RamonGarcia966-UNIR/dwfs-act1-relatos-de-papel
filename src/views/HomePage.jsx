import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { books } from "../data/books";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";


export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredBooks = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return books;

    return books.filter((book) =>
      book.title.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <section className="page__content home">
      <div className="home__controls">
        <h2 className="page__title">Catálogo</h2>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <BookList
        books={filteredBooks}
      />

    </section>
  );
}

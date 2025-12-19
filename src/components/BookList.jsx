import BookItem from "./BookItem";

export default function BookList({ books, onAddToCart }) {
  if (books.length === 0) {
    return <p>No hay libros para mostrar.</p>;
  }

  return (
    <ul lassName="books__list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onAddToCart={onAddToCart}
        />
      ))}
    </ul>
  );
}

import { useParams, Link, useNavigate } from "react-router-dom";
import { books } from "../data/books";
import BookNotFound from "../components/BookNotFound";
import BookInfo from "../components/BookInfo";
import BookActions from "../components/BookActions";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const bookId = Number(id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return <BookNotFound bookId={id} />;
  }

  return (
    <section className="page book-detail">
      <div className="book-detail__header">
        <Link onClick={() => navigate(-1)} className="book-detail__back">Volver al catálogo</Link>
        <h2 className="book-detail__title">{book.title}</h2>
      </div>

      <div className="book-detail__card">
        <div className="book-detail__grid">
          <div className="book-detail__cover-wrap">
            <img src={book.image} alt={book.title} className="book-detail__cover" />
          </div>

          <div className="book-detail__content">
            <BookInfo author={book.author} price={book.price} />
            <BookActions book={book} />
          </div>
        </div>
      </div>
    </section>
  );
}


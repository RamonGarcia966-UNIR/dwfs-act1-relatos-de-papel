import { useParams, Link, useNavigate } from "react-router-dom";
import { books } from "../data/books";
import { useCart } from "../hooks/useCart";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const bookId = Number(id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return (
      <section>
        <h2>Libro no encontrado</h2>
        <p>No existe un libro con id {id}.</p>
        <p>
          <Link to="/home">Volver a la tienda</Link>
        </p>
      </section>
    );
  }

  return (
    <section className="page__content book-detail">
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
            <div className="book-detail__info">
              <p className="book-detail__meta">Autor</p>
              <p className="book-detail__author">{book.author}</p>

              <p className="book-detail__meta">Precio</p>
              <p className="book-detail__price">{book.price.toFixed(2).replace(".", ",")} €</p>
            </div>

            <div className="book-detail__actions">
              <button className="book-detail__btn book-detail__btn--primary" onClick={() => addToCart(book)}>
                Añadir al carrito
              </button>
              <button className="book-detail__btn book-detail__btn--secondary" onClick={() => navigate("/cart")}>
                Ir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

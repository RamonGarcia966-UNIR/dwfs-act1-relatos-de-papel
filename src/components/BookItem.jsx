import { Link } from "react-router-dom";

export default function BookItem({ book, onAddToCart }) {
    return (
        <li className="books__item">
            <div className="books__cover-wrap">
                <Link to={`/book/${book.id}`}>
                    <img src={book.image} alt={`Portada de ${book.title}`} className="books__cover" />
                </Link>
            </div>

            <div className="books__info">
                <Link className="books__title" to={`/book/${book.id}`}>{book.title}</Link>
                <span className="books__meta">{book.author}</span>
            </div>

            <div className="books__actions">
                <span className="books__price">{book.price.toFixed(2).replace(".", ",")} €</span>
                <button className="books__btn" onClick={() => onAddToCart(book)}>
                    Añadir al carrito
                </button>
            </div>

        </li>
    );
}

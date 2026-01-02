/**
 * BookInfo Component
 * Displays book information (author and price)
 */
export default function BookInfo({ author, price }) {
    return (
        <div className="book-detail__info">
            <p className="book-detail__meta">Autor</p>
            <p className="book-detail__author">{author}</p>

            <p className="book-detail__meta">Precio</p>
            <p className="book-detail__price">{price.toFixed(2).replace(".", ",")} €</p>
        </div>
    );
}

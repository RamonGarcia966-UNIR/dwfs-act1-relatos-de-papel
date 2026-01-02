import { Link } from "react-router-dom";

/**
 * BookNotFound Component
 * Displays error message when a book is not found
 */
export default function BookNotFound({ bookId }) {
    return (
        <section>
            <h2>Libro no encontrado</h2>
            <p>No existe un libro con id {bookId}.</p>
            <p>
                <Link to="/home">Volver a la tienda</Link>
            </p>
        </section>
    );
}

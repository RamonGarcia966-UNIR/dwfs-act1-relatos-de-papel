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
    <section>
      <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Precio: {book.price.toFixed(2).replace(".", ",")} €</p>

      <p>
        <button onClick={() => addToCart(book)}>Añadir al carrito</button>{" "}
        <button onClick={() => navigate("/cart")}>Ir al carrito</button>
      </p>

      <p>
        <button onClick={() => navigate(-1)}>← Volver</button>{" "}
      </p>
    </section>
  );
}

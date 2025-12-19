import { books } from "../data/books";
import { useCart } from "../hooks/useCart";

export default function HomePage() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <section>
      <h2>Home</h2>

      <h3>Libros disponibles</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> – {book.author} – {book.price} €
            <button onClick={() => addToCart(book)}>
              Añadir
            </button>
          </li>
        ))}
      </ul>

      <h3>Carrito</h3>
      {cart.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title}
              <button onClick={() => removeFromCart(item.id)}>
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
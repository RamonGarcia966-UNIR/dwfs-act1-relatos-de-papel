import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); // [{...book, qty}]

  // const addToCart = (book) => {
  //   setCart((prev) => [...prev, book]);
  // };


  const addToCart = (book) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...book, qty: 1 }];
    });
  };

   // decrementa 1 unidad
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item)
      .filter((item) => item.qty > 0)
    );
  };

  // elimina el producto completo (todas las unidades)
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totals = useMemo(() => {
    const itemsCount = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    return { itemsCount, totalPrice };
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQty, removeFromCart, clearCart, totals }}
    >
      {children}
    </CartContext.Provider>
  );
}

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Landing from "./views/Landing";
import HomePage from "./views/HomePage";
import BookDetails from "./views/BookDetails";
import Checkout from "./views/Checkout";

function AppContent() {
  return (
    <div>
      <h1>Relatos de Papel</h1>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

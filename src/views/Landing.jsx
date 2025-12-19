import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <section>
            <h2>Relatos de Papel</h2>
            <p>Bienvenido a la librería online.</p>
            <p>Serás redirigido a la página principal en 5 segundos…</p>

            <button onClick={() => navigate("/home")}>Entrar ahora</button>
        </section>
    );
}

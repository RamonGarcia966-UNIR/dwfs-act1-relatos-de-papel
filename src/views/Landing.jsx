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
        <section className="page landing">
            <div className="landing__content">
                <h2 className="landing__title">Relatos de Papel</h2>
                <p className="landing__text">Bienvenido a su librería online de confianza.</p>
                <p className="landing__subtext">Serás redirigido a la página principal en en 5 segundos…</p>

                <button className="btn btn--primary landing__btn" onClick={() => navigate("/home")}>
                    Entrar ahora
                </button>
            </div>
        </section>
    );
}

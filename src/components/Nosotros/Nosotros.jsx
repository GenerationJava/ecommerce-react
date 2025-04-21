import React from "react";
import "./Nosotros.css";

const miembrosEquipo = [
    {
        id: 1,
        nombre: "Danileo Lizama",
        rol: "Desarrollador",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdlHVwqECdSnpSNQhoMEZ2njjK7qce9CI5w&s"
    },
    {
        id: 2,
        nombre: "Simon Chavez",
        rol: "Desarrollador",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdlHVwqECdSnpSNQhoMEZ2njjK7qce9CI5w&s"
    },
    {
        id: 3,
        nombre: "Gabriel Covarrubias",
        rol: "Product Owner",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdlHVwqECdSnpSNQhoMEZ2njjK7qce9CI5w&s"
    },
    {
        id: 4,
        nombre: "Midora Sovino",
        rol: "Scrum Master",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdlHVwqECdSnpSNQhoMEZ2njjK7qce9CI5w&s"
    },
    {
        id: 5,
        nombre: "Norma Armijo",
        rol: "Desarrolladora",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdlHVwqECdSnpSNQhoMEZ2njjK7qce9CI5w&s"
    },
];

export default function Nosotros() {
    return(
        <>
            <section className="equipo">
                <h2>Conoce al equipo</h2>
                <div className="miembros-equipo">
                    {miembrosEquipo.map((miembro) => (
                        <div key={miembro.id} className="miembro">
                            <div className="miembro-foto">
                                <img src={miembro.foto} alt={miembro.nombre}/>
                            </div>
                            <h3>{miembro.nombre}</h3>
                            <p>{miembro.rol}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
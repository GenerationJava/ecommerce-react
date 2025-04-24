//Simulación de cómo recibiremos los productos del backend
import React from "react";
import { useTheme } from "../../context/themeContext";//Hook personalizado, que utiliza el contexto de modo oscuro
import { Link } from "react-router-dom";
import { borderRadius, gap, gridTemplateColumns, padding } from "@mui/system";

export default function GridProducto({ categoria }) {
    //Usamos los colores del tema oscuro
    const { colors } = useTheme();

    //Creamos un conjunto de productos de prueba, simulando lo que vamos a recibir de la API
    const productos = {
        hombre: [
            { id: 1, nombre: "Camiseta", precio: 15000, imagen:"https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { id: 2, nombre: "Pantalon", precio: 30000, imagen:"https://images.unsplash.com/photo-1541840031508-326b77c9a17e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        ],
        mujer: [
            { id: 3, nombre: "Zapatillas", precio: 40000, imagen:"https://images.unsplash.com/photo-1651573091103-530884aa68ff?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { id: 4, nombre: "Vestido", precio: 50000, imagen:"https://plus.unsplash.com/premium_photo-1673977132933-2a028c2f05a8?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        ninos: [
            { id: 5, nombre: "Uniforme escolar", precio: 20000, imagen:"https://plus.unsplash.com/premium_photo-1723701879924-90d234dcc0f8?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { id: 6, nombre: "Uniforme de deporte", precio: 30000, imagen:"https://images.unsplash.com/photo-1659081443046-268bee889587?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ],
        destacados: [
            { id: 7, nombre: "Camiseta de algodon", precio: 20000,imagen:"https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { id: 8, nombre: "Traje de baño", precio: 30000, imagen:"https://plus.unsplash.com/premium_photo-1721830498757-ebc68f215580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { id: 9, nombre: "Chaqueta de invierno", precio: 50000, imagen:"https://images.unsplash.com/photo-1706765779494-2705542ebe74?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        ]
    };

    return (
        <>
            <div
                style={{
                    display:"grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))",
                    gap: "2rem",
                }}
            >
                {/*Tarjeta a generar por cada producto*/}
                {productos[categoria].map((producto) => (
                    <div
                        key={producto.id}
                        style={{
                            backgroudColor: colors.background,
                            padding: "1rem",
                            borderRadius: "8px",
                            boxShadow: "0 2px 8px rgba(0,0,0,1)",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%"
                        }}
                    >

                        <div
                            style={{
                                width: "100%",
                                height: "200px",
                                overflow: "hidden",
                                marginBottom: "1rem",
                                borderRadius: "5px"
                            }}
                        >
                            <img
                                src={producto.imagen}
                                alt={producto.nombre}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            >

                            </img>
                        </div>
                        <h3 style={{ color: colors.text }}>{producto.nombre}</h3>
                        <p style={{ color: colors.primary, fontWeight: "bold" }}>{producto.precio.toLocaleString()}</p>

                        <Link
                            to={`/producto/${producto.id}`}
                            style={{
                                color: colors.primary,
                                textDecoration: "none",
                                fontWeight: "bold",
                                display: "inline-block",
                                marginTop: "1rem"
                            }}
                            >
                            Ver detalles
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )

}
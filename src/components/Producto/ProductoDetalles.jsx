import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productoService } from "../../service/ProductoService";
import { useTheme } from "../../context/themeContext";

export default function ProductoDetalles() {
    //Estados para el componente
    const navigate = useNavigate();
    const { id } = useParams();
    const {colors} = useTheme();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("") ;


    //Usamos un useEffect para llamar a la api y al método getById con axios
    useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productoService.getById(id);
        setProducto(data);
        setCargando(false);
      } catch (err) {
        setError("Error al cargar el producto");
        setCargando(false);
      }
    };
    fetchProduct();
  }, [id]);

  
    if (cargando) {
        return <div>Cargando producto...</div>;
    }


    return (
        <>
        <div>
            <div>
                
            {producto.imagenUrl ? (
                    <img 
                        src={producto.imagenUrl} 
                        alt={producto.nombre}
                        style={{ maxWidth: "100%" }}
                    />
                ) : (
                    <span>Sin imagen</span>
                )}
                <h1>{producto.nombre}</h1>
                <p>{producto.precio.toLocaleString()}</p>
                <p>{ producto.stock > 0 ? producto.stock : "Agotado" }</p>
                <p>Categoría: {producto.categoria.nombre}</p>
            </div>
            <div>
                <button>Eliminar producto</button>
            </div>
        </div>
        </>
    )
}
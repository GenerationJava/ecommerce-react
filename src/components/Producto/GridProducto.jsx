//Simulación de cómo recibiremos los productos del backend
import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/themeContext";//Hook personalizado, que utiliza el contexto de modo oscuro
import { Link } from "react-router-dom";
import ProductCard from "./ProductoCard";
import { productoService } from "../../service/ProductoService";

export default function GridProducto({ categoria }) {
    //Usamos los colores del tema oscuro
    const { colors } = useTheme();
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [categorias, setCategorias] = useState([]);

    //Este objeto permitirá indicar la categoría de productos
    //const categorias = { hombre: "HOMBRE", mujer: "MUJER", ninos: "NINOS" };


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Primero obtenemos las categorías
                const categoriasData = await productoService.getCategorias();
                setCategorias(categoriasData);
                
                // Si hay una categoría específica, obtenemos sus productos
                if (categoria) {
                    const categoriaEncontrada = categoriasData.find(
                        cat => cat.nombre.toLowerCase() === categoria.toLowerCase()
                    );
                    
                    if (!categoriaEncontrada) {
                        throw new Error('Categoría no encontrada');
                    }
                    
                    const data = await productoService.getByCategory(categoriaEncontrada.nombre);
                    setProductos(data);
                }
            } catch (error) {
                setError(error.message);
                console.error(error);
            } finally {
                setCargando(false);
            }
        };
        
        fetchData();
    }, [categoria]);


    //Usamos el useEffect para llamar a axios y al método get()
    useEffect(() => {
        const fetchProducts = async() => {
            try {
                //Verificamos que traiga una categoría al momento de buscar con axios
                if(!categorias[categoria]) 
                    throw new Error('Categoría inválida')
                    const data = await productoService.getByCategory(categorias[categoria]);
                    setProductos(data);
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setCargando(false);
            }
        };
        fetchProducts();
    }, [categoria]);

    //Mensaje de carga cuando cambiemos de categoría
    if(cargando) 
        return (<div style={{textAlign:'center', padding:'2rem' }}>Cargando...</div>)

    
    return (
        <>
        <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
        gap: "2rem" 
      }}>
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} colors={colors} />
        ))}
      </div>
        </>
    )

}
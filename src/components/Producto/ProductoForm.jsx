import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productoService } from '../../service/ProductoService';
import { useTheme } from '../../context/themeContext';

export default function ProductoForm() {
    //Estados del componente
    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        stock: "",
        categoriaId: "1"
    });
    const [imagen, setImagen] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();//Hook para redireccionamiento
    const { colors } = useTheme();

    //Creamos las funciones que manejan cambios y submit del formulario a través de eventos como onSubmit y onChange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto((previo) => ({...previo, [name]: value}))
    };

    //Creamos un método para manejar el campo del formulario que recibe la imagen y este la toma de el evento
    const handleImageChange = (e) => {
        setImagen(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();//Con este método prevenimos que se recargue la página (comportamiento por defecto de los formularios)
        setError("");
    

    //Validamos antes de retornar elementos del formulario
    if(!producto.nombre || !producto.precio || !producto.stock || !imagen) {
        setError("Todos los campos deben completarse, incluyendo la imagen");
        return;
    }

    //Preparamos los datos que serán enviados al servidor, ya que algunos campos vienen como string
    try {
        const datosProducto = {
            ...producto,
            precio: parseFloat(producto.precio),
            stock: parseInt(producto.stock)
        }
        
        
        //Ahora le decimos a productoService que lo envíe al backend con axios
        await productoService.createProduct(datosProducto, imagen);
        console.log("Luego de la promesa")

        //navigate me permite redireccionar sin cargar la página
        navigate("/tienda");
        } catch (error) {
            //setError("Error al crear un nuevo producto ", error.message);
            console.log(error);
        }
    };  

    return (
        <>
            <div>
                <div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>Nombre:</label>
                            <input type="text" 
                                name='nombre'
                                value={producto.nombre}
                                onChange={handleChange}
                                required
                            />
                            <label>Precio:</label>
                            <input type="number" 
                                name='precio'
                                value={producto.precio}
                                onChange={handleChange}
                                required
                            />
                            <label>Stock:</label>
                            <input type="number" 
                                name='stock'
                                value={producto.stock}
                                onChange={handleChange}
                                required
                            />
                            <label>Categoria:</label>
                            <select
                                name='categoriaId'
                                value={producto.categoriaId}
                                onChange={handleChange}
                                required>
                            <option value="1">Hombre</option>
                            <option value="2">Mujer</option>
                            <option value="3">Niños</option>
                            </select>

                            <label>Imagen:</label>
                            <input
                                type='file'
                                accept='image/'
                                onChange={handleImageChange}
                                required
                            />
                            <button type='submit'>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
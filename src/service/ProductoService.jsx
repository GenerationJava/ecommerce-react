//Este componente se va a encargar de definir cómo se va a llamar a cada recurso o endpoints para Producto
import api from '../api/api'

export const productoService = {
    //Este objeto que vamos a exportar como servicio define todos los métodos
    //Método para obtener la lista de productos
    getAll: async () => {
        try {
            const response = await api.get("/productos/lista");
            return response.data;
        } catch (error) {
            console.log("Hubo un error al obtener los productos", error);
            throw error;
        }
    },

    getByCategory: async (categoria) => {
    //Hacemos uso del mismo método para obtener todos los productos y hacemos filtrado por acá
        try {
            const response = await api.get("/productos/lista");
            console.log("Datos recibidos del backend ", response.data);
            //Usamos función filter para buscar por categoría
            return response.data.filter(
                (producto) =>
                    producto.categoria && producto.categoria.nombre === categoria.toUpperCase()
            );
        }
        catch (error) {
            console.log("hubo un error al obtener los productos por categoría ", error);
            throw error;
        }
    },

    createProduct: async (datosProducto, imagen) => {
        try {
            //Creamos una instancia de formData que permite trabajar con pares llave:valor
            const datosForm = new FormData();

            const productoDto = {
                nombre: datosProducto.nombre,
                precio: datosProducto.precio,
                stock: datosProducto.stock,
                categoriaId: datosProducto.categoriaId
            }
        

        //Usamos una instancia de Blob(permite que JAVA reciba el objeto JSON en conjunto con la imagen)
        const productoBlob = new Blob([JSON.stringify(productoDto)], {
            type: "application/json"
        });
        datosForm.append("imagen", imagen);
        datosForm.append("producto", productoBlob);

        const response = await api.post("/productos/nuevo", datosForm, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        
        return response.data;

    } catch (error ) {
        console.log("Error al crear nuevo producto ", error);
        throw error;
    }
    },


    getById: async(id) => {
        try {
            const response = await api.get(`productos/producto/${id}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log("Error al buscar producto por id ", error);
            throw error;
        }
    },

    deleteById: async(id) => {
        try {
            const response = await api.delete(`productos/borrar/${id}`)
            return response.data;
        } catch (error) {
            console.log("Error al eliminar producto por id ", error);
            throw error;
        }
    }

}

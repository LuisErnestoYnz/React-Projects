import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    // Logica que se copio del componente GifGrid y se usó para hacer el custom hook
    // Inicializar con un arreglo vacio. Este images se usará para mostrar nuestras imagenes a traves de un ciclo
    const [images, setImages] = useState([]);
    // State para manejar el loading, cuando se carga por primera vez, se inicializa en true
    const [isLoading, setIsLoading] = useState(true);

    // funcion async para obtener imagenes
    const getImages = async() => {
        // se obtiene una promesa de la funcion getGifs la cual obtiene imagenes por categoria
        const newImages = await getGifs( category );
        // Agrega las imagenes
        setImages( newImages );
        setIsLoading( false );
    }

    // Solamernte cuando el componente se carga, es ahi donde queremos disparar el useEffect
    // Tiene dos argumentos: una funcion (callback) y una lista de dependencias (condiciones en las cuales queremos volver a ejecutar el callback)
    // Arreglo de dependencias; [] se diaparará solo una vez que es la primera vz que se construye el componente
    // el callback dentro de useEffect no puede ser una funcion async
    useEffect(() => {
        // useEffect dispara este getImages de arriba
        getImages();
    }, []);   

    return {
      images,
      isLoading
    }
}

import { getGifs } from "../helpers/getGifs";  // Se importa función getGifs de helpers / getGifs.js
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({ category }) => {

    // Custom Hook useFetchGifs para cargar las imagenes. Desestructura como un objeto
    const { images, isLoading } = useFetchGifs( category );
    console.log(isLoading);

    return (
        <>
            <h3>{ category }</h3>
            {/* mensaje de carga */}
            {
                isLoading && (<h2> Cargando... </h2>)
            }

            {/* Si se usa jsx, en vez de class, usar className */}
            <div className="card-grid">
                {/* { images se itera por ser un arreglo, puede ser tambien desestructuracion en lugar de elemento, asi: ( {id, title} ) */}
                {
                    // El titulo y la url vienen en elemento 
                    images.map((elemento) => (        
                        // El componente GifItem se renderiza aqui, se usa como key el id, y se manda el elemento (imagen) completo al componente GifItem como prop
                        <GifItem 
                            key={ elemento.id } 
                            title={ elemento.title }
                            url={ elemento.url }
                            // {...elemento}  // todas las propiedades que vengan en el elemento, las estamos esparciendo en GifItem recibe c/u de estas como properties
                        />
                    ))
                }
            </div>
        </>
    )
}

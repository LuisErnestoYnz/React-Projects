import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';
import './index.css';

{/*Componente principal. Este componente estará dividido en tres partes*/}
export const GiftExpertApp = () => {
    /* Uso de hook useState para almancenar varias categorias. Agregar valor inicial al estado*/
    // Se inicializará como un arreglo categorias cuyo primer valor de categoría será One Punch
    // Para mofigicar este arreglo de categories, usamos el metodo setCategories
    const [categories, setCategories] = useState([]);

    // Agregar nuevo elemento al listado de categorias
    const onAddCategory = ( newCategory ) => {
        // Si la categoria existe, no hacer nada, sino, se insertará en setCategories
        if ( categories.includes(newCategory) ) {
            return;
        }
        // Se requiere de mantener las categorias actuales y agregar la nueva
        // operador spread para 'copiar' el arreglo categories en otro nuevo y agregar el valor de 'Valorant'
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            {/* Titulo */}
            <h1 className='main-title'>Gift Expert App</h1>

            {/* Input */}
            {/* Se agrega una propiedad a AddCategories donde se pasa la referencia a la funcion setCategories */}
            {/* AddCategory crea un input y emite el valor cuando la pérosna da enter */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory = { event => onAddCategory(event) }
            />

            {/* Listado de Gifts Renderizar listado basado en las categorias */}
            {/* Uso de un Order List <ol> */}
  
            {/* map aplica una funcion para cada elemento del arreglo */}
            {/* cada que tenemos una categoria nueva, esa categoria vuelve a crear el componente y los anteriores componentes se conservan */}
            { 
                categories.map( (categoria) => (
                    <GiftGrid key={ categoria } category={ categoria }/>
                )) 
            }
            
        </>
    );
};
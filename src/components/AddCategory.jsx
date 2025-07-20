import { useState } from 'react';
import './AddCategory.css';

// Props setCategories pasadas de GiftExpertApp.jsx
export const AddCategory = ( { onNewCategory } ) => {
    // Tendrá de valor inicial un string vacio
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        // console.log( event.target.value ); // o bien desestructurar target y usar aqui target.value
        setInputValue( target.value );
    }
 
    const onSubmit = ( event ) => {
        // No se quioere que se haga un refresh del navegador
        event.preventDefault();
        // input value se tiene que enviar para actualizar la información en el path
        console.log( inputValue );
        // trim para eliminar espacios adelante y atras del input value y lenght es para que por lo menos tiene que haber 1 letraa
        // si hay espacio en blanco o 1 letra, se sale de la funcion y no ejecuta nada
        if(inputValue.trim().length <= 1) return;
        // limpiar el input para que una ves ingresado un valor y dado enter, se limpie el input
        setInputValue('');   

        // funcion props recibida de GiftExpertApp donde le tenemos que agregar el input value
        // categories se refiere a las categorias actuales. Se reemplaza arreglo e inserta el valur actual inputValue y le agrega las categorias actuales
        // onNewCategory( categories => [ inputValue, ...categories ]);

        onNewCategory( inputValue.trim());
    }

    return (
        // {/* Type, placeholder y value son conocidos como properties aqui, no como atributos html */}
        <form onSubmit={ (event) => onSubmit( event ) }>
            <input 
                className='input-buscar'
                type='text' 
                placeholder='Buscar Gifs...' 
                value={ inputValue }
                onChange={ (event) => onInputChange(event) } 
            />
        </form>
    );
}

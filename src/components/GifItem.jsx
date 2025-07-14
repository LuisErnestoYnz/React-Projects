// Recibir elemento (imagen completo del componente padre GiftGrid)
// Para mostrar un gifItem se requiere solo del title y url
export const GifItem = ( {title, url} ) => {
  return (
    <div className='card'>
        {/* Para mostrar la imagen */}
        <img src={ url } alt={ title } />
        <p>{ title }</p>

    </div>
  )
}
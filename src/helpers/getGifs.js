// Petición http a través de funcion async (es una mala práctica)
export const getGifs = async( category ) => {
    // &limit=20 limita a 20 resultados que nos serán proporcionados
    const url= `https://api.giphy.com/v1/gifs/search?api_key=JgCJzNJcL9LpH15hKuEXX49gRZg1dP6Q&q=${category}&limit=10`;
    // Petición http; se obtiene una promesa
    const respuesta = await fetch(url);
    // Obtener la data
    const { data } = await respuesta.json();
    // Retornaremos un nuevo objeto con las propiedades que queremos
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    //console.log(gifs);
    return gifs;
}
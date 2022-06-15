
export const getImagen = async() => {
    try {
        const apiKey = '60SeCvIdnXToPGMFsK8uQPLPQUJ9Gu0k';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const {data} = await resp.json();
        // console.log(data.images.original);
        const {url} = data.images.original;
        console.log(url);

        return url;
                    
    } catch (error) {
        // console.log( error );
        return 'No se encontro la imagen';
    }
}

getImagen();


export const getImages = async (section) => {
    
    //https://api.imgur.com/3/gallery/hot/viral/0.json
    //const url = `https://api.imgur.com/3/gallery/top/viral/0.json`;
    const url = `https://api.imgur.com/3/gallery/${ encodeURI( section.radioSection ) }/viral/0.json?showViral=${ encodeURI( section.showViral ) }`;
    const headers = { 'Authorization': 'Client-ID 3472b8e78e47900' }
    const resp = await fetch( url, { headers } );
    const { data } = await resp.json();

    const imagenes = data.map((img) => {
        let urlValue = "";
        let urlPresentationValue = "";
        let isGif = false;
        
        if(img.images !== undefined)
        {
            urlValue = img.images;          
            urlPresentationValue = img.images[0].link;
            if(img.images[0].link.includes("mp4")){
                isGif = true;
            }
                
        }
        else {
            if(img.link.includes("mp4")){
                isGif = true;
            }
            urlValue = img.link;
            urlPresentationValue = img.link;
        }
       
        return{
            id: img.id,
            title: img.title,
            urlPresentation: urlPresentationValue,
            url: urlValue,
            boolGif: isGif,
            //boolGallery: isGallery,
            likes: img.ups,
            dislikes: img.downs,
            score: img.score,
            description: img.description ? img.description : "Description is empty"
        }
    })
    return imagenes;
}
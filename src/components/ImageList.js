import React, { useState } from 'react';

import { useFecthImages } from '../hooks/useFecthImages';
import { DropDownsFilter } from './DropDownsFilter';
import { ImageCard } from './ImageCard';
import  './ImageList.css';
//import { ImageListCss } from './ImageList.css';
export const ImageList = () => {

    const intialState = { radioSection: 'hot', showViral: 'false'}
    const [section, setSection] = useState(intialState);

    const {data:images, loading} = useFecthImages( section );

    return (
        <>

            <button className="btn btn-outline-info" style={{"marginBottom": "5%"}} type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Show Filters
            </button>
            <div className="collapse" id="collapseExample">
                <DropDownsFilter setSection = { setSection }/>
            </div>
            
            <br></br>
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className="card-columns d-flex justify-content-center">               
            {
                images.map( image => (
                    <ImageCard 
                            key={ image.id }
                            { ...image }
                        />
                    
                ))
            } 
            </div>

        </>
           
    )
}

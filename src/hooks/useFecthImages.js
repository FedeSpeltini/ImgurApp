import { useState, useEffect } from 'react'
import { getImages } from '../data/getImages';


export const useFecthImages = ( section ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getImages(section )
            .then( imgs => { 
                setstate( {
                    data: imgs,
                    loading: false
                })
            })
    }, [section])


    return state; // {data: [], loading: true}
}
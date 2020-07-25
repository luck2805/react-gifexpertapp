import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // Los efectos no pueden ser nunca asyncronos, por lo tanto no pueden manejar promesas (tiene que ser sincrono)
    useEffect(() => {
        getGifts(category)
        .then( images => setState({
            data: images,
            loading: false
        })) // es lo mismo a then( images => setImages ) 
    }, [category])

    return state

}
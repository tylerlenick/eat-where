/*import {useState, useEffect} from 'react'
import * as api from './api'

export const useRestaurantSearch = (location:object) => {
    const [restaurant, setRestaurant] = useState({})
    const [searchParams, setSearchParams] = useState(location)

    useEffect(() => {
        setRestaurant({})
        const fetchData = async () => {
            try{
                const resp = await api.get('/businesses/search', searchParams)
                setRestaurant(resp)
            } catch(e){
                console.error(e)
            }
        }
        fetchData();
    }, [searchParams])
    return [restaurant, searchParams, setSearchParams]
}*/export{}

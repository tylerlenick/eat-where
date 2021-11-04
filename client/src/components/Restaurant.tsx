import { FC } from 'react'
//import { useRestaurantSearch } from '../hooks/yelp-api/useRestaurantSearch'

interface location {
    longitude: number,
    latitude: number
}

export const Restaurant:FC<location> = (location) => {
    //const [restaurant, searchParams, setSearchParams] = useRestaurantSearch(location)

    return (
        <div>
            Restaurant Here
        </div>
    )
}
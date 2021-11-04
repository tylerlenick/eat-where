import { FC } from 'react'

interface location {
    longitude: number,
    latitude: number
}

export const Restaurant:FC<location> = (location) => {
    return (
        <div>
            <h1>Restaurant Name</h1>
            <span>About: This place is great...</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4retPEkVGQTmUMs_lEi5-DFP-fgHWPDkSNw&usqp=CAU"></img>
        </div>
    )
}
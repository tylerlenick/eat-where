import {YELP_BASE_URL, YELP_TOKEN} from './config.js'
import queryString from 'query-string'
import axios from 'axios'

export const get = (path: string, queryParams:object) => {
    const query = queryString.stringify(queryParams)
    return axios.get(`${YELP_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${YELP_TOKEN}`,
            Origin: 'localhost',
            //withCredentials: true

        }
    })
}

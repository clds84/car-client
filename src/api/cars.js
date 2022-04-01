import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllCars = () => {
    return axios(`${apiUrl}/cars`)
}

// show function
export const getOneCar = (carId) => {
    return axios(`${apiUrl}/cars/${carId}`)
    
    
}
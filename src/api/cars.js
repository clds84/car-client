import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllCars = () => {
    return axios(`${apiUrl}/cars`)
}

// show function
export const getOnePet = (petId) => {
    return axios(`${apiUrl}/pets/${petId}`)
}
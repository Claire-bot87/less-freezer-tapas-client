import axios from "axios"
import { getToken }  from "../utils/auth"

const BASE_URL = import.meta.env.VITE_API_URL + '/foodItems'

export const foodItemIndex = async() => {
    try{
        const res = await axios.get(BASE_URL)
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
    }


export const foodItemShow = async (foodItemId) => {
    try{
        const res = await axios.get(BASE_URL + `/${foodItemId}`)
        console.log(`foodItem ID = ${foodItemId}`)
        console.log('Response from foodItemShow:', res.data) 
        return res.data
    } catch (error) {
        console.log('Error in foodItemShow:', error)
        throw error
    }
    }




export const foodItemCreate = async (formData) => {
    console.log('foodItem CREATE foodItem SERVICE')
    console.log(formData)
    // eslint-disable-next-line no-useless-catch
    try {
        const res = await axios.post(`${BASE_URL}/`, formData,{
            headers: {
            Authorization: `Bearer ${getToken()}`,
            // 'Content-Type': 'application/json',
        }})
        return res.data
    } catch(error) {
    throw error
    }
    }


    export const foodItemUpdate = async(foodItemId, formData) => {

        // eslint-disable-next-line no-useless-catch
        try {
            const res = await axios.put(`${BASE_URL}/${foodItemId}/`, formData, {
                headers: {
                Authorization: `Bearer ${getToken()}`,
         
            }})
return res.data
    }catch(error) {
        throw error
    }
    }


    export const foodItemDelete = async(foodItemId) => {

        // eslint-disable-next-line no-useless-catch
        try {
            console.log(`foodItem ID IN SERVICE ${foodItemId}`)
            const res = await axios.delete(`${BASE_URL}/${foodItemId}/`,{
                headers: {
                Authorization: `Bearer ${getToken()}`,
        }})
    return res.data  
}catch(error) {
    throw error
}
}

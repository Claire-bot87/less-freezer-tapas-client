import axios from "axios"
import { getToken }  from "../utils/auth"

const BASE_URL = import.meta.env.VITE_API_URL + '/childs'

export const childIndex = async() => {
    try{
        const res = await axios.get(BASE_URL)
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
    }


export const childShow = async (childId) => {
    try{
        const res = await axios.get(BASE_URL + `/${childId}`)
        console.log(`child ID = ${childId}`)
        console.log('Response from childShow:', res.data) 
        return res.data
    } catch (error) {
        console.log('Error in childShow:', error)
        throw error
    }
    }




export const childCreate = async (formData) => {
    console.log('child CREATE child SERVICE')
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


    export const childUpdate = async(childId, formData) => {

        // eslint-disable-next-line no-useless-catch
        try {
            const res = await axios.put(`${BASE_URL}/${childId}/`, formData, {
                headers: {
                Authorization: `Bearer ${getToken()}`,
         
            }})
return res.data
    }catch(error) {
        throw error
    }
    }


    export const childDelete = async(childId) => {

        // eslint-disable-next-line no-useless-catch
        try {
            console.log(`child ID IN SERVICE ${childId}`)
            const res = await axios.delete(`${BASE_URL}/${childId}/`,{
                headers: {
                Authorization: `Bearer ${getToken()}`,
        }})
    return res.data  
}catch(error) {
    throw error
}
}


//NEED TO COMPLETE THIS:

export const addChildLike = async (childId, foodItemId) => {
    try {
      const res = await axios.put(`${BASE_URL}/${childId}/likes`,
        { foodItemId }, 
        {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        }
    })
      return res.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
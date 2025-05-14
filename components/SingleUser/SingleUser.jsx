import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { userShow } from '../../services/userService'
import './SingleUser.css'

export default function SingleUser() {

//state
const [user, setUser] = useState(null)
const [error, setError] = useState('')
const [isLoading, setIsLoading] = useState(true)

// Locations variables
const { userId } = useParams()
const navigate = useNavigate()


useEffect(() => {
async function getUser(){
try {
const data = await userShow(userId)
console.log(` THIS IS THE DATA ${data}`)
setUser(data)
}catch(error) {
    if (error.status === 400) {
        setError('User not found.')
      } else {
        setError(error.response.data.message)
      }
      
    } finally {
      setIsLoading(false)
    }
  }
  getUser()
}, [userId])

console.log(` THIS IS THE USER ${user}`)
    return(
<div className='single-user-div'>
<h1>User show page</h1>
    <h1>{user}</h1>
</div>

    )

}
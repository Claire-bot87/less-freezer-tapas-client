import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { userShow } from '../../services/userService'
import AllChildsSideBar from '../../components/AllChildsSideBar/AllChildsSideBar.jsx'
import ChildCard from '../../components/ChildCard/ChildCard.jsx'
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
    console.log(` THIS IS THE USER ID ${userId}`)  
const data = await userShow(userId)
console.log(` THIS IS THE DATA ${data}`)
setUser(data)
console.log(` THIS IS THE USER ID ${data._id}`)
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


//   const handleTest = async () => {
   
//       try {
//         console.log('USER AFTER SETUSER' + user.username)
     
//       } catch (error) {
//         // 
//       }
//     }
  


    return (
<div className='single-user-div'>
<div className='username-div'>
{user ? <h1>{user.username}</h1> : <h1>Loading user</h1>}
</div>
<h1>Find healthy recipe ideas for your children</h1>



<AllChildsSideBar />



</div>

    )

}
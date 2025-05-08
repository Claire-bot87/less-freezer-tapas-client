import { useParams, useNavigate } from 'react-router'
import AllFoodItems from '../../components/AllFoodItems/AllFoodItems.jsx'
import ChildCard from '../../components/ChildCard/Childcard.jsx'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useState, useEffect } from 'react'
import { childShow } from '../../services/childService'
import './SingleChild.css'
import '../../src/App.css'

export default function SingleChild(){



  // State
  const [child, setChild] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  
  
   // Location variables
   const { childId } = useParams()
   const navigate = useNavigate()
  
  
  useEffect(() => {
      console.log(`BISCUIT ID = ${childId}`)
      async function getChild(){
        try {
          const data = await childShow(childId)
          console.log(`BISCUIT ID = ${childId}`)
          setChild(data)
        } catch (error) {
          if (error.status === 400) {
            setError('Child not found.')
          } else {
            setError(error.response.data.message)
          }
          
        } finally {
          setIsLoading(false)
        }
      }
      getChild()
    }, [childId])
  
      return (
          <>
       <div className='space'></div>
   
         { child && <ChildCard child={child}/> }
        
          </>
  )
  }
  
  

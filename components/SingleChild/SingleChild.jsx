import { useParams, useNavigate } from 'react-router'
import AllFoodItems from '../../components/AllFoodItems/AllFoodItems.jsx'
import ChildCard from '../../components/ChildCard/Childcard.jsx'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useState, useEffect } from 'react'
import { childShow } from '../../services/childService'
import './SingleChild.css'
import '../FoodItemCard/FoodItemCard.css'
import '../AllFoodItems/AllFoodItems.css'
import '../../src/App.css'
import { foodItemIndex } from '../../services/foodItemService'

export default function SingleChild() {



  // State
  const [child, setChild] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [newLikes, setNewLikes] = useState([])
  const [newDislikes, setNewDislikes] = useState([])

  // Location variables
  const { childId } = useParams()
  const navigate = useNavigate()

  const [allFoodItems, setAllFoodItems] = useState([])

  const addToNewLikesList = (itemToAdd) => {
    setNewLikes([...newLikes, itemToAdd])

  }

  const addToNewDislikesList = (itemToAdd) => {
    setNewDislikes([...newDislikes, itemToAdd])

  }

  useEffect(() => {
    console.log(`❤️NEW LIKES UPDATED: ${newLikes}`)
  }, [newLikes])

  useEffect(() => {
    console.log(`❌❌NEW DISLIKES UPDATED: ${newDislikes}`)
  }, [newDislikes])

  useEffect(() => {
    console.log(`BISCUIT ID = ${childId}`)
    async function getChild() {
      try {
        const data = await childShow(childId)
        console.log(`CHILD ID = ${childId}`)
        console.log("👶 CHILD DATA:", data)
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
      <div className="background">
      <div className="childcard-div">
        {child && <ChildCard child={child} newLikes={newLikes} newDislikes={newDislikes} />}
      </div>
      <div className="fooditems-div">
        {child && <AllFoodItems child={child} addToNewLikesList={addToNewLikesList} addToNewDislikesList={addToNewDislikesList} />}
      </div>
      </div>
    </>
  )
}

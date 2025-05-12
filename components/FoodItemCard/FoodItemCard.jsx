import { useContext } from 'react'
import { foodItemDelete } from '../../services/foodItemService'
import { Link, useNavigate, useParams, useLocation } from 'react-router'
import { UserContext } from '../../contexts/UserContext'
import { addChildLike } from '../../services/childService'
import { addChildDislike } from '../../services/childService'
import './FoodItemCard.css'
import { useState, useEffect } from 'react'


const FoodItemCard = ({ child, foodItem, addToNewLikesList, addToNewDislikesList }) => {

  const [like, setLike] = useState({})
  const [dislike, setDislike] = useState({})
  const [error, setError] = useState('')

  const { childId } = useParams()

  const location = useLocation()
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const isHomepage = location.pathname === '/foodItems'
  const isSingleFoodItemPage = location.pathname === `/foodItems/${foodItem.id}`





  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?')
    if (confirmDelete) {
      try {
        console.log('foodItem ID IN HANDLE DELETE' + foodItem.id)
        await foodItemDelete(foodItem.id)
        navigate('/foodItems/')
      } catch (error) {
        // 
      }
    }
  }

  const handleAddChildLike = async (foodItemId) => {
    try {
      console.log(`🍔FOOD ITEM ID IN HANDLE ADD ${foodItemId}`)
      console.log(`🍟FOOD ITEM NAME IN HANDLE ADD ${foodItem.name}`)
      const response = await addChildLike(childId, foodItemId)
      setLike(response)
      addToNewLikesList(foodItem.name)

    } catch (error) {
      console.log(error)
      setError({ general: "Something went wrong. Please try again." })
    }
  }


  const handleAddChildDislike = async (foodItemId) => {
    try {
      console.log(`🍔FOOD ITEM ID IN HANDLE ADD ${foodItemId}`)
      console.log(`🍟FOOD ITEM NAME IN HANDLE ADD ${foodItem.name}`)
      const response = await addChildDislike(childId, foodItemId)
      setDislike(response)
      addToNewDislikesList(foodItem.name)

    } catch (error) {
      console.log(error)
      setError({ general: "Something went wrong. Please try again." })
    }
  }


  console.log('foodItem OBJECT' + foodItem)
  console.log(JSON.stringify(foodItem, null, 2))
  console.log('foodItem ID' + foodItem._id)
  console.log('foodItem NAME' + foodItem.name)
  console.log(`USER ID ${user?.id}`)
  console.log(`foodItem USER ID ${foodItem.user}`)
  console.log(`foodItem TYPE ${foodItem.type}`)
  console.log("FOOD ITEM ID FOR LIKE BUTTON", foodItem._id)

  return (


    <article className='food-card'>
      {/* {isSingleFoodItemPage && ( */}
      <div className='foodItem-card-large'>
        <div className="single-foodItem-box">
          <div className="food-details">
            <h2>{foodItem.name}</h2>
            {isSingleFoodItemPage && (
              <div>
                <img src={foodItem.image} alt={`picture of ${foodItem.name}`} className='image' style={{ padding: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}></img>

                <p>description : {foodItem.description}</p>
                <p>category : {foodItem.type}</p>
              </div>
            )}
          </div>
        </div>
      </div>


      {isHomepage && (

        <div className="box">
          <div className='image-box'>
            <img src={foodItem.image} alt={`picture of ${foodItem.name}`}></img>
          </div>
          <div className="details">

            <h2>{foodItem.name}</h2>

          </div>
        </div>

      )}




<div className="like-dislike-buttons-div">

      <button className="button" id="add-like" onClick={() => { handleAddChildLike(foodItem._id) }}></button>
      <div id="add-dislike" onClick={() => { handleAddChildDislike(foodItem._id) }}>🤮</div>
      </div>

      {isHomepage && (
        //   <Link to={`/foodItems/${foodItem.id}`}>
        //   <div className='look'>

        // </div>
        // </Link> 
        <button className="button" id="add-like" onClick={() => { handleAddChildLike(foodItem._id) }}></button>
      )}
    </article>
  )
}

export default FoodItemCard
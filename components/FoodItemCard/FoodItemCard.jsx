import { useContext } from 'react'
import { foodItemDelete } from '../../services/foodItemService'
import { Link, useNavigate, useParams, useLocation } from 'react-router'
import { UserContext } from '../../contexts/UserContext'
import { addChildLike } from '../../services/childService'
import './FoodItemCard.css'
import { useState, useEffect } from 'react'


const FoodItemCard = ({ foodItem, addToNewLikesList }) => {

  const [like, setLike]= useState ({})
  const [error, setError] = useState('')
 

  const { childId } = useParams()

  const location = useLocation()
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

const isHomepage = location.pathname === '/foodItems'
const isSingleFoodItemPage = location.pathname === `/foodItems/${foodItem.id}`
// const isSingleChildPage = location.pathname === `/childs/${child.id}`




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


console.log('foodItem OBJECT' + foodItem)
console.log(JSON.stringify(foodItem, null, 2))
console.log('foodItem ID' + foodItem._id)
console.log('foodItem NAME' + foodItem.name)
console.log(`USER ID ${user?.id}`)
console.log(`foodItem USER ID ${foodItem.user}`)
console.log(`foodItem TYPE ${foodItem.type}`)
console.log("FOOD ITEM ID FOR LIKE BUTTON", foodItem._id)
    return (


      <article className = 'card'>
      {isSingleFoodItemPage && (
    <div className ='foodItem-card-large'>
<div className= "single-foodItem-box">
<img src={foodItem.image} alt={`picture of ${foodItem.name}`} className='image' style={{padding: '20px', display:'flex',justifyContent:'center', flexDirection:'column',alignItems: 'center' }}></img>
<div className= "details">
  <h2>{foodItem.name}</h2>
  <p>description : {foodItem.description}</p>
  <p>category : {foodItem.type}</p>
</div>
</div>
</div>
)}

     {isHomepage && (

<div className= "box">
  <div className='image-box'>
<img src={foodItem.image} alt={`picture of ${foodItem.name}`}></img>
</div>
<div className= "details">

  <h2>{foodItem.name}</h2>

</div>
</div>

)}

<div className= "details">

  <h2>{foodItem.name}</h2>

</div>


<div className='pencil-garbage-wrapper'>
<div className="garbage" onClick={handleDelete}></div>
<Link to={`/foodItems/${foodItem.id}/edit`}> 
<div className="pencil"></div>
</Link>
<Link to={`/foodItems/${foodItem.id}/rating`}> 
<div className="rating"></div>
</Link>      
</div>

<button className="button" id="add-like" onClick={() => {handleAddChildLike(foodItem._id)}}></button>

{isHomepage && (
//   <Link to={`/foodItems/${foodItem.id}`}>
//   <div className='look'>

// </div>
// </Link> 
 <button className="button" id="add-like" onClick={() => {handleAddChildLike(foodItem._id)}}></button>
 )}
      </article>
    )
  }
  
  export default FoodItemCard
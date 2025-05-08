import { useContext } from 'react'
import { childDelete } from '../../services/childService'
import { Link, useNavigate, useParams, useLocation } from 'react-router'
import { UserContext } from '../../contexts/UserContext'

import './ChildCard.css'



const ChildCard = ({ child }) => {

  const location = useLocation()
  const { user } = useContext(UserContext)
  const navigate = useNavigate()


  const childId = child.id || child._id; // works with both views

  const isHomepage = location.pathname === '/childs';
  const isSingleChildPage = location.pathname === `/childs/${childId}`;
  


const handleDelete = async () => {
  const confirmDelete = window.confirm('Are you sure you want to delete this post?')
  if (confirmDelete) {
    try {
      console.log('child ID IN HANDLE DELETE' + child.id)
      await childDelete(child.id)
      navigate('/childs/')
    } catch (error) {
      // 
    }
  }
}

console.log('child OBJECT' + child)
console.log(JSON.stringify(child, null, 2))
console.log('child ID' + child.id)
console.log('child NAME' + child.name)
console.log(`USER ID ${user?.id}`)
console.log(`child USER ID ${child.user}`)
console.log(`child TYPE ${child.type}`)

console.log('😊location.pathname:', location.pathname);
console.log('😊isSingleChildPage:', isSingleChildPage);
console.log('😊Expected path:', `/childs/${child.id}`);


    return (
   
      <article className = 'card'>
      {isSingleChildPage && (
    <div className ='child-card-large'>
<div className= "single-child-box">
<img src={child.image} alt={`picture of ${child.name}`} className='image' style={{padding: '20px', display:'flex',justifyContent:'center', flexDirection:'column',alignItems: 'center' }}></img>
<div className= "details">
  <h2>{child.name}</h2>
  <p>description : {child.description}</p>
  <p>category : {child.type}</p>
</div>
</div>
</div>
)}

     {isHomepage && (

<div className= "box">
  <div className='image-box'>
<img src={child.image} alt={`picture of ${child.name}`}></img>
</div>
<div className= "details">
  <h2>{child.name}</h2>
  <h2>Likes:</h2>
<ul>
  {child.likes?.map((foodItem) => (
    <li key={foodItem._id}>{foodItem.name}</li>
  ))}
</ul>
</div>
</div>

)}

{user?.id === child.user && isSingleChildPage && (
<div className='pencil-garbage-wrapper'>
<div className="garbage" onClick={handleDelete}></div>
<Link to={`/childs/${child.id}/edit`}> 
<div className="pencil"></div>
</Link>
<Link to={`/childs/${child.id}/rating`}> 
<div className="rating"></div>
</Link>      
</div>
)} 

{isSingleChildPage && (
  
<Link to="/">  
<div className='back'>
</div>
</Link>
)}

{isHomepage && (
  <Link to={`/childs/${child.id}`}>
  <div className='look'>

</div>
</Link> 
)}
      </article>

    )
  }
  
  export default ChildCard
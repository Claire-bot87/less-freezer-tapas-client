import { useContext } from 'react'
import { childDelete } from '../../services/childService'
import { Link, useNavigate, useParams, useLocation } from 'react-router'
import { UserContext } from '../../contexts/UserContext'

import './ChildCard.css'



const ChildCard = ({ child, newLikes, newDislikes }) => {

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
  console.log(`🤮child DISLIKES ${child.dislikes}`)
  console.log('😊location.pathname:', location.pathname);
  console.log('😊isSingleChildPage:', isSingleChildPage);
  console.log('😊Expected path:', `/childs/${child.id}`);
  console.log("❌Dislikes from child object:", child.dislikes)


  return (
<>

    {isSingleChildPage && (
      <div className="child-card-large">
        <div className="for-name-and-image">
          <h2>{child.name}</h2>
  
          {child.gender === 'girl' && (
            <div className="image-div-girl"></div>
          )}
  
          {child.gender === 'boy' && (
            <div className="image-div-boy"></div>
          )}
  
       
        </div>
  
        <div className="single-child-box">
          <div className="details">
            <div className="likes">
              <ul>
                {child.likes?.map((foodItem) => (
                  <li key={foodItem._id}>{foodItem.name}</li>
                ))}
              </ul>
  
              <ul>
                {newLikes?.map((newLike) => (
                  <li key={newLike}>{newLike}</li>
                ))}
              </ul>
            </div>
  
            <div className="dislikes">
              <ul>
                {child.dislikes?.map((foodItem) => (
                  <li key={foodItem._id}>{foodItem.name}</li>
                ))}
              </ul>
  
              {console.log('💥 newDislikes passed to ChildCard:', newDislikes)}
  
              <ul>
                {newDislikes?.map((newDislike) => (
                  <li key={newDislike}>{newDislike}</li>
                ))}
              </ul>
            </div>
          </div>
  
         
        </div>
        <Link to="/">
            <div className="back"></div>
          </Link>
      </div>
    )}




 
      {/* <div className="box">
        <div className="details">
          <h2>{child.name}</h2>
          <h2>Likes:</h2>
          <ul>
            {child.likes?.map((foodItem) => (
              <li key={foodItem._id}>{foodItem.name}</li>
            ))}
          </ul>
        </div>
        <p>extra</p>
      </div> */}
 
{/*   
    {isHomepage && (
      <Link to={`/childs/${child.id}`}>
        <div className="look"></div>
      </Link>
    )} */}

  </>

      )
      }

      export default ChildCard

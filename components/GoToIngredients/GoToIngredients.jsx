import { useState, useEffect, useContext} from 'react'
import { Link } from 'react-router'
import AllChildsSideBar from '../../components/AllChildsSideBar/AllChildsSideBar.jsx'
import { childIndex } from '../../services/childService'
import { UserContext } from '../../contexts/UserContext'
import './GoToIngredients.css'




const GoToIngredients = () => {

    //state
    // const [user, setUser] = useState(null)
    
     const { user } = useContext(UserContext)
     const [sharedLikes, setSharedLikes] = useState([])

    // Locations variables


    const [childs, setChilds]= useState ([])
    // const userChildren = childs.filter(child => String(child.parent._id) === String(user._id))

    // const childLikes = userChildren.flatMap(child => child.likes)

    const getObjectsWithDuplicateIds = async (arr) => {
        const idCounts = {};
        const seen = new Set();
        const result = [];
      
        // Count IDs
        for (let obj of arr) {
          const id = obj._id;
          idCounts[id] = (idCounts[id] || 0) + 1;
        }
      
        // Collect only one of each duplicate
        for (let obj of arr) {
          const id = obj._id;
          if (idCounts[id] > 1 && !seen.has(id)) {
            result.push(obj);
            seen.add(id); // Mark this ID as added
          }
        }
      
        setSharedLikes(result);
      };



    useEffect(() => {
        childIndex()
         .then(data => {
         console.log("👶 CHILD INDEX RESPONSE:", data)
         setChilds(data)
         console.log("👶 CHILDS after set:", data)})
        .catch(err => console.log(err))
        }, [])

      
        useEffect(() => {
            const userChildren = childs.filter(child => String(child.parent._id) === String(user._id));
            const childLikes = userChildren.flatMap(child => child.likes);
            getObjectsWithDuplicateIds(childLikes);
          }, [childs, user]);  

   

    console.log('🍟 SHARED LIKES', sharedLikes[0])


    return (

<div className='goto-container'>
        <div className='goto-div'>
                 <div className='message-div'>
<h1>These are your go-to ingredients to buy. The crowd-pleasers that the whole family will enjoy....</h1>
</div>
<div className='image-and-list-div'>

      <div className='shared-likes'>
      {sharedLikes.map(like => (
        <h1 key={like._id}> {like.name}</h1>
      ))}

</div>
<div className='image-div'>

</div>
</div>
</div>
</div>

    )
}

export default GoToIngredients
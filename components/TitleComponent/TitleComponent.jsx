import './TitleComponent.css';
import { Link } from 'react-router'

const TitleComponent = () => {
  return (

    <Link to='/'>
  <div className="title-div">
    <h1>Less Freezer Tapas</h1>
    </div>
    </Link>
  )
}

export default TitleComponent;  
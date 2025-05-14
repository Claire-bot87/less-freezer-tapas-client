import TitleComponent from '../../components/TitleComponent/TitleComponent.jsx'
import { Link } from 'react-router'
import './Nav.css'

export default function Nav(){

    return (
        <div className="nav-div">
        <TitleComponent />
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
        </div>
    )
 
}
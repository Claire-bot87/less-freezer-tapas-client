import './AddChild.css'
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { UserContext } from '../../contexts/UserContext'
import { childCreate } from '../../services/childService'

export default function AddChild() {

    const [formData, setFormData] = useState({
        name: '',
        gender: '',

    })

    const [isUploading, setIsUploading] = useState(false)


    const { user } = useContext(UserContext)

    const navigate = useNavigate()

    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (!user) {
            navigate('/signin')
        }
    }, [user, navigate])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await childCreate(formData)
            navigate(`/childs/${data._id}`)

        } catch (error) {
            setErrors(error.response?.data?.errors || {})
        }
    }

    const handleChange = async (e) => {
        setErrors({ ...errors, [e.target.name]: '' })
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section className='add-child-container'>
            <h1>AddChild</h1>
            <form onSubmit={handleSubmit}>
                {/*name*/}
                <div className='form-field'>
                    <label htmlFor='name'>name</label>
                    <input className='input'
                        name='name'
                        id='name'
                        placeholder='add child name'
                        value={formData.name}
                        onChange={handleChange}
                        required>
                    </input>
                </div>

                {/*gender*/}
                <div className='form-field'>
                    <label htmlFor='name'>gender</label>
                    <input
                        className="input"
                        type="text"
                        name="gender"
                        id="gender"
                        placeholder="add gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='button-group'>
          <Link to='/'>Cancel</Link>
          <button type='submit' disabled={formData.name === '' || isUploading}>Create</button>
        </div>

            </form>
        </section >
    )


}
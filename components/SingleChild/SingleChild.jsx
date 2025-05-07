import { useParams } from 'react-router'

export default function SingleChild(){

    const params = useParams()
    console.log(params)
    return <h1>SingleChild</h1>
}
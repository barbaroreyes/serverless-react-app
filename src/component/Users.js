import {useContext} from 'react'
import {UserContext} from '../contex/user'
import {Link} from 'react-router-dom'
import '../App.css'
const Users = () => {
    const users = useContext(UserContext)
   
  return (
    <div className='all'>{users.map((item ,i)=>{
        return(<Link to ={`/users/${item.userId}`}className='user' key={i}>{item.name}</Link>)
    })}</div>
  )
}

export default Users
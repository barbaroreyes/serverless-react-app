import {useContext} from 'react'
import {UserContext} from '../contex/user'
import '../App.css'
const Users = () => {
    const users = useContext(UserContext)
    console.log('Users',users)
  return (
    <div className='all'>{users.map((item ,i)=>{
        return(<div className='user' key={i}>{item.name}</div>)
    })}</div>
  )
}

export default Users
import {useParams} from 'react-router-dom'
import {useContext} from 'react';
import {UserContext} from '../contex/user'
const Single = () => {
    const {userId} = useParams();
    
    const users = useContext(UserContext);
    const single = users.find(user => user.id === userId);
    
   const {name } = single
  return (
    <div className="all">
     <div className="users">
        {name}
        {userId}
     </div>
    </div>
  )
}

export default Single

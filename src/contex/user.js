import {createContext , useState, useEffect} from 'react';

const UserContext = createContext(null)
const UserProvider = ({children}) => {
    const [users , setUsers] = useState([]);

 useEffect(()=> {
  allUsers ()
 },[])
  const allUsers = async () => {
  try {
   await fetch("https://6yzybkwg10.execute-api.us-east-1.amazonaws.com/users")
   .then(res => res.json())
.then(data => setUsers(data.Items))
   
  } catch (error) {
    
  }
 
  }
 



  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
}

export {UserContext,UserProvider};

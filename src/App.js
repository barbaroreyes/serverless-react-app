import Users from "./component/Users"
import Single from './component/Single'
import {Routes , Route} from 'react-router-dom'
import './App.css';
import Header from "./component/Header";


//https://6yzybkwg10.execute-api.us-east-1.amazonaws.com/users/dfdsd
function App() {
 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<Single/>}/>
      </Routes>
    

    </div>
  );
}

export default App;

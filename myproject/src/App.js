
import './App.css';
import { Login } from './login';
import { User } from './user';
import { User1 } from './user1';
import { User2 } from './user2';

function App() {
return(
<div className='App' >
   
   <Login />
<div>
   <User />
   </div>
   <div>
      <User1/>
   </div>
   <div>
      <User2/>
   </div>
   
   </div>
   );  
}

export default App;

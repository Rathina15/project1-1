
import './App.css';
import { Login } from './login';
import { Login1 } from './login1';
import { Login2 } from './login2';
import { Login3 } from './login3';
import { Login4 } from './login4';



function App() {
return(
<div className='App' >
   <center>
   <Login />
<div>
   <Login1/>
   </div>
   <div>
      <Login2/>
   </div>
   <div>
      <Login3/>
   </div>
   <div>
      <Login4/>
   </div>
   </center>
   </div>
   );  
}

export default App;

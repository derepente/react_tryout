
import './index.css'
import Employee from './component/Employee';
import {useState} from 'react';


function App() {
  
  const showEmployees = true; 
  const [role, setRole] = useState('dev');

  return (
    <div className="App bg-red-300">
      {console.log('inside the return branke, showEmployees is active')}
      
      {showEmployees ?
    <>
    <input type='text' onChange={(e)  => {
      console.log(e.target.value);
      setRole(e.target.value);
      
    }} />

    
        <Employee name = "Klaus" role="intern"></Employee>
        <Employee name = "Björn" role={role}></Employee>
        <Employee name = "Hannes"></Employee>
        
        
      </>
      : 
      <p>You shall not see the Employees</p>
      }

      
    </div>
  );
}

export default App;

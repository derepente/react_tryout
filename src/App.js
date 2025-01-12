
import './App.css'
import Employee from './component/Employee';


function App() {
  
  const showEmployees = true; 
  const count = 4;

  return (
    <div className="App">
      {console.log('inside the return branke, showEmployees is active')}
      {showEmployees ?
    <>
        <Employee></Employee>
        <Employee></Employee>
        <Employee></Employee>
        <Employee></Employee>
        
      </>
      : 
      <p>You shall not see the Employees</p>
      }

      
    </div>
  );
}

export default App;

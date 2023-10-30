
import { useState } from 'react';
import './App.css';
import Inputcontainer from './Components/Inputcontainer';
import DisplayData from './Components/DisplayData';

function App() {
  const [todos ,setDotos] = useState([]);
  const addNote =(newdata)=>{
    setDotos([...todos,newdata]);
  }
  const deleteNote =(deleteData) =>{
     const filterData = todos.filter((item)=>item !== deleteData);
     setDotos(filterData);
  }
  const updata =(data)=>{
    setDotos(data);
  }

  return (
    <div className="App" style={{backgroundColor:"coral"}}>
      <h1 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>This is Todo App</h1>

    <Inputcontainer addNote={addNote} />
    < DisplayData todos={todos} deleteNote={deleteNote}  updata={updata} addNote={addNote} />
    </div>
  );
}

export default App;

import { useState } from 'react'
import Dark from './components/dark.jsx'
import Gio from './components/Profile.jsx'
import Ana from './components/Ana.jsx'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const handleSearch = ()=>{
    if (inputValue.toLowerCase() === "gio") {
      setName(< Gio />);
    } else if (inputValue.toLowerCase() === "ana") {
      setName(< Ana />);
    } else {
      setName("No result");
    }
  }

  return (
    <>
    <div style={{display: "flex", gap:'1000px', margin:0, position: "absolute", left: "150px",}}>
    <h1>Devfinder</h1>
    <Dark />
    </div>
    <div style={{display: 'flex', width:'600px',height:'100px', alignItems:'center', background:'#482dcf', position: "absolute", top: "150px", left: "420px",}}>      
      <p style={{color:"#0088ff",}}>🔍︎</p>
      <input style={{width:'500px', height:'50px', background: "#482dcf", color:'white',}} type="text" placeholder='Search GitHub username...' className='inputname' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button style={{backgroundColor:"#0088ff", color: "white",}} onClick={handleSearch}>Search</button>
    </div>
    <div style={{position: "absolute", top: "300px", left: "420px",}}>{name}</div>
    <div style={{position:"absolute", top:"400px",}}>
    <p>I have only added Gio and Ana.</p>
    <p>In other situations it will return "No result"</p>
    </div>
    </>
  )
}

export default App
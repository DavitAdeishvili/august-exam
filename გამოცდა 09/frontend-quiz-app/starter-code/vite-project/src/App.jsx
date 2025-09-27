import { useState, useEffect } from "react"
import DarkMode from "./components/darkmode"
import Quiz from "./components/Quiz"
import Quiz2 from "./components/Quiz2"
import './index.css'

function App() {
const [color, setColor] = useState('white')

    useEffect(() => {
        document.body.style = `background: ${color}; color: ${color === 'white' ? 'black' : 'white'}`
    }, [color])
  return (
    <>
    <div className="bg-blue-150">

<div className="absolute top-4 right-10">
  <DarkMode />
</div>
      
<br /><br /><br /><br /><br /><br /><br />
      <h1 className="text-6xl w-150 absolute left-60 top-50">Welcome to the <b>Frontend Quiz!</b></h1>

<br /><br /><br /><br /><br />

  <p className="text-grey absolute left-70 top-90">Pick a subject to get started.</p>

<div className="flex gap-4 flex-col absolute top-50 left-250">
<button onClick={() => <Quiz />} className="border px-4 text-2xl">HTML</button>
<button onClick={() => <Quiz />} className="border px-4 text-2xl">CSS</button>
<button onClick={() => <Quiz />} className="border px-4 text-2xl">JavaScript</button>
<button onClick={() => <Quiz />} className="border px-4 text-2xl">Accessibility</button>
</div>
  </div>

  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  
            <p>Question 1 out of 2</p>
            <div className="flex flex-col" style={{ backgroundColor: color }}>
                <h2>What is my name?</h2>
                <button onClick={() => setColor('red')}>A Nika</button>
                <button onClick={() => {setColor('green'); <Quiz2 />}}>B David</button>
                <button onClick={() => setColor('red')}>C Giorgi</button>
                <button onClick={() => setColor('red')}>D Andria</button>
            </div>  

            <p>Question 2 out of 2</p>
            <div className="flex flex-col"style={{ backgroundColor: color }}>
                <h2>What is your name?</h2>
                <button onClick={() => { setColor('green'); console.log("nice job"); }}>A Nika</button>
                <button onClick={() => setColor('red')}>B David</button>
                <button onClick={() => setColor('red')}>C Giorgi</button>
                <button onClick={() => setColor('red')}>D Andria</button>
            </div>
    </>)
}

export default App;
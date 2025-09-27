import {useState, useEffect} from 'react'
import DarkMode from './darkmode'
import Quiz2 from './Quiz2.jsx'

function Quiz() {
    const [color, setColor] = useState('white')

    useEffect(() => {
        document.body.style = `background: ${color}; color: ${color === 'white' ? 'black' : 'white'}`
    }, [color])
    return (
        <>
            <DarkMode />
            <p>Question 1 out of 2</p>
            <div style={{ backgroundColor: color }}>
                <h2>What is my name?</h2>
                <button onClick={() => setColor('red')}>A Nika</button>
                <button onClick={() => {setColor('green'); <Quiz2 />}}>B David</button>
                <button onClick={() => setColor('red')}>C Giorgi</button>
                <button onClick={() => setColor('red')}>D Andria</button>
            </div>
        </>
    )
}

export default Quiz
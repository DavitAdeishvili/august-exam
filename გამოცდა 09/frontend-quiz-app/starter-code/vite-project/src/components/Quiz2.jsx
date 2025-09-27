import {useState, useEffect} from 'react'
import DarkMode from './darkmode'


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
                <h2>What is your name?</h2>
                <button onClick={() => { setColor('green'); console.log("nice job"); }}>A Nika</button>
                <button onClick={() => setColor('red')}>B David</button>
                <button onClick={() => setColor('red')}>C Giorgi</button>
                <button onClick={() => setColor('red')}>D Andria</button>
            </div>
        </>
    )
}

export default Quiz
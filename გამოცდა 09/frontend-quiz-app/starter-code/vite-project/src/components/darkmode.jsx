import {useState, useEffect} from 'react'

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
        document.body.style = 'background: blue; color: white'
    } else {
        document.body.style = 'background: white; color: blue'
    }
  }, [darkMode])

  return (
    <div>
    <button onClick={() => setDarkMode(prev => !prev)}>
      {darkMode ? 'Light' : 'Dark'} Mode
    </button>
    </div>
  )
}

export default DarkMode
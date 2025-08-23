import { useState, useEffect } from "react"

function dark () {
    let [isDark, setIsDark] = useState(false)

    useEffect(() => {
        if (isDark) {
            document.body.style.color = "#120396"
        } else {
            document.body.style.color = "black"
        }
    }, [isDark])

  return (
    <button onClick={() => setIsDark(!isDark)} >{isDark ? "Light ☀︎" : "Dark 🌙"}</button>
  )
}

export default dark
import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = useState(true)
    
    const handleToggleClick = () => {
        setDarkMode((prevMode) => !prevMode)
    }
    
    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={handleToggleClick} />
            <Main darkMode={darkMode} />
        </div>
    )
}

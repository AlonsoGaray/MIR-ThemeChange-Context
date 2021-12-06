import React, { useContext } from "react"
import ThemeContext from "./ThemeContext"

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)

  const onHandleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const font = 
    theme === "dark"
      ? ".lorem {font-size: 18px;}"
      : ".lorem {font-size: 24px;}"


  return (
    <>
    <style>{font}</style>
    <p className="lorem">lorem ipsum dolor sit amet, consectetur adip</p>
    <button
      onClick={onHandleChange}
      className="button-theme"
    >
      Cambiar
    </button>
    </>
  )
} 

export default ThemeSwitcher
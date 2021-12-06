import React, { useContext } from "react"
import ThemeContext from "./ThemeContext"
import ThemeSwitcher from "./ThemeSwitcher"

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const bg = 
    theme === "dark"
      ? "body {background-color: #404042; color: white;}"
      : "body {background-color: #fff; color: #000;} .hijo {border: 2px solid #4CAF50}"

  return (
    <>
      <div className="container">
        <style>{bg}</style>
      </div>
      { children }
      <ThemeSwitcher />
    </>
  )
}

export default Layout
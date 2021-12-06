import React, { useContext } from "react"
import ThemeContext from "./ThemeContext"

export const Main = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="hijo">
    <div className={theme}>
      <h1>List of books</h1>
      <ul>
        <li>Sapiens</li>
        <li>Fear and loading of the campaign trail '72</li>
        <li>Range</li>
        <li>Chasing the scream</li>
        <li>Former People</li>
      </ul>

    </div>
    </div>
  )
}
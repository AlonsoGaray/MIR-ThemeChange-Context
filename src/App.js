import React, { useState } from 'react'
import ThemeContext from './ThemeContext'
import Layout from "./Layout"
import { Main } from './Main'

import './App.css';

function App() {
  const [theme, setTheme] = useState("dark")
  const value = { theme, setTheme }

  return (
    <div className="App">
      <ThemeContext.Provider value={value} >
        <Layout>
          <Main />
        </Layout>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

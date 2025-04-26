
import React from "react";
import './../styles/App.css';
import Auth from './Auth.js'
import {createContext} from 'react'

export const AuthContext = createContext()

const App = () => {
  const [flag, setFlag] = React.useState(false)
  return (
    <AuthContext.Provider value={flag}>
      <h2>Click on the checkbox to get authenticated</h2>
      <Auth />
      <br></br>
      <input type="checkbox" id="checkbox" onClick={()=>setFlag(prev => !prev)}/>
      <label htmlFor="checkbox">I'm not a robot</label>
    </AuthContext.Provider>
  )
}

export default App

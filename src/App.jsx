import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'


import './App.css'
import Home from './Pages/Home'


function App() {
 
  return (
    <div className="app">
        <NavBar/>                
        <Outlet/>
      
    </div>
  )
}

export default App

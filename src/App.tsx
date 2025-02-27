import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './components/Home';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Header from './components/Header';


function App() {

  return (
   <div>
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='services' element={<Services/>} />
          <Route path='contacts' element={<Contacts/>}/>
        </Routes>
    </Router>

  
   </div>
  )
}

export default App

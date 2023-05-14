
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Registartion from './pages/Registartion';




function App() {
  return(
   <div>
    <Nav/>
    <>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/registr/:id' element={<Registartion/>}/>
        <Route path="/catalog/:courseId" element={<Catalog/>} />
        
      </Routes>
    </>
    
    </div>
    )
}

export default App;

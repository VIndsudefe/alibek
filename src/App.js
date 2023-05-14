
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Registartion from './pages/Registartion';
import UnitId from './pages/UnitId';




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
        <Route path="unit/:unitId" element={<UnitId/>} />
      </Routes>
    </>
    
    </div>
    )
}

export default App;

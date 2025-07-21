import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import NavBar from './components/Navbar/navBar';
import Home from './pages/Home';
import AdDetail from './pages/AdDetail';

function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path=':id' element={<AdDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

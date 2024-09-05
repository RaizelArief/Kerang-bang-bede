import './App.css'
import Home from './assets/Pages/Home';
import Induk from './assets/Pages/Induk';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Induk />} />
          <Route path="/HALAMAN" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;

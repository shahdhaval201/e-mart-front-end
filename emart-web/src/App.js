import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import "./App.css"
import OurStore from './Components/OurStore';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='store' element={<OurStore />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;

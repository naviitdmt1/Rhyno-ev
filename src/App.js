import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Products from './Pages/Products';
import ContactUs from './Pages/ContactUs';
import PreBook from './Pages/PreBook';
import CompareAll from './Pages/CompareAll';
import Rentals from './Pages/Rentals';
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/prebook' element={<PreBook/>}></Route>
        <Route path='/compareall' element={<CompareAll/>}></Route>
        <Route path='/rentals' element={<Rentals/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

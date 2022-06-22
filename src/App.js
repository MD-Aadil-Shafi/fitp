import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Sttore from './pages/store/Sttore';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/store' element={<Sttore/>}/>
        <Route exact path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

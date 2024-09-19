import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
      <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Home/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

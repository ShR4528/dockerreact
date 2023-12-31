
import './App.css';
import OtherPage from './OtherPage';
import MainComponent from './MainComponent';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className='header'>
        This is <Link to='/'>Home</Link>
        <Link to='/otherpage'>OtherPage</Link>
      </div>
      <Routes className='main'>
        <Route path='/' element={<MainComponent />} />
        <Route path='/otherpage' element={<OtherPage />} />

      </Routes>
    </Router>



  );
}

export default App;

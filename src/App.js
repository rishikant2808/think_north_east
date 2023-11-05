import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Activities from './pages/Activities/Activities';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/gallery" element={<Gallery/>} />
             <Route exact path="/activities" element={<Activities/>} />
            {/* <Route exact path="/" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/" element={<Home />} /> */} 
          </Routes>
    </div>
  );
}

export default App;

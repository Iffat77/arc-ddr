import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import GameBoard from './components/GameBoard';
import Home from './screens/Home';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;

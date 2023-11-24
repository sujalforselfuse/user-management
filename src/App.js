import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Left from './components/Left';
import Right from './components/Right';
import Right2 from './components/Right2';
function App() {
  return (
    <Router>
      <div className='flex flex-row'>

      <Left></Left>
      <Routes>
        <Route className='overflow-auto' path="/" element={<Right />} />
        <Route className='overflow-y-scroll' path="/adduser" element={<Right2 />} />
        
      </Routes>
      </div>
    </Router>
  );
}

export default App;

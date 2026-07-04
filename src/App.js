import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentDash from './pages/StudentDash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} /> */

      </Routes>
    </BrowserRouter>

  );
}

export default App;
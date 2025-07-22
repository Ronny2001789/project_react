// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/AddDashboardItem'; // or rename it to Dashboard.js


function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center" }}>
        <Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

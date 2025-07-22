import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Attempt login
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard if successful
      navigate('/dashboard');
    } catch (error) {
      // Stay on login and alert error if login fails
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="login-container">
  <div className="login-box">
    <h2>Login</h2>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>
  </div>
</div>

  );
}

export default Login;

import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@neighbourmart.com' && password === 'admin123') {
      alert('Login Successful!');
      navigate("/");
      localStorage.setItem('user', JSON.stringify({ email }));
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={formWrapperStyle}>
      <form style={formStyle} onSubmit={handleLogin}>
        <h2 style={{ color: '#2e7d32' }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

// 💡 Style Definitions
const formWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'linear-gradient(to right, #f0f4f7, #e8f5e9)',
};

const formStyle = {
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  margin: '10px 0',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  background: 'linear-gradient(to right, #43a047, #66bb6a)',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default Login;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateGroup = () => {
  const navigate = useNavigate();
  const [vendor, setVendor] = useState('');
  const [minOrder, setMinOrder] = useState('');
  const [closingTime, setClosingTime] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vendor || !minOrder || !closingTime || !category) {
      alert('Please fill out all required fields!');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('groups')) || [];
    const newGroup = {
      id: Date.now(),
      vendor,
      minOrder,
      closingTime,
      category,
      notes
    };

    localStorage.setItem('groups', JSON.stringify([...existing, newGroup]));
    alert('🎉 Group Created Successfully!');
    navigate('/browse');
  };

  return (
    <div style={wrapperStyle}>
      <h1 style={titleStyle}>🛠️ Create a New Group</h1>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Vendor Name *"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Min Order Value (₹) *"
          value={minOrder}
          onChange={(e) => setMinOrder(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Closing Time (e.g. 6 PM) *"
          value={closingTime}
          onChange={(e) => setClosingTime(e.target.value)}
          style={inputStyle}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ ...inputStyle, color: category ? '#000' : '#888' }}
        >
          <option value="">Select Category *</option>
          <option value="Groceries">Groceries</option>
          <option value="Dairy">Dairy</option>
          <option value="Fruits & Vegetables">Fruits & Vegetables</option>
          <option value="Household">Household</option>
        </select>
        <textarea
          placeholder="Additional Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
        />
        <button type="submit" style={buttonStyle}>🚀 Create Group</button>
      </form>

      <button onClick={() => navigate('/')} style={backButtonStyle}>
        ← Back to Home
      </button>
    </div>
  );
};

// 🔵 Styles

const wrapperStyle = {
  padding: '50px 20px',
  textAlign: 'center',
  background: 'linear-gradient(to right, #f7f7f7, #e2f5e9)',
  minHeight: '100vh'
};

const titleStyle = {
  color: '#2e7d32',
  marginBottom: '30px',
  fontWeight: 'bold',
  fontSize: '2.2rem',
  letterSpacing: '1px'
};

const formStyle = {
  maxWidth: '500px',
  margin: '0 auto',
  backgroundColor: 'white',
  padding: '35px',
  borderRadius: '15px',
  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  margin: '12px 0',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '15px',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s',
  outline: 'none'
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  background: 'linear-gradient(to right, #43a047, #66bb6a)',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '15px',
  boxShadow: '0 6px 15px rgba(67,160,71,0.3)',
  transition: 'background 0.3s ease'
};

const backButtonStyle = {
  marginTop: '25px',
  padding: '10px 20px',
  backgroundColor: '#777',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default CreateGroup;

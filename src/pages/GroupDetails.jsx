import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const GroupDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [group, setGroup] = useState(null);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    const foundGroup = storedGroups.find(g => g.id === parseInt(id));
    if (foundGroup && !foundGroup.items) {
      foundGroup.items = [];
    }
    setGroup(foundGroup);
    setGroups(storedGroups);
  }, [id]);

  const handleAddItem = () => {
    if (!itemName || !quantity) {
      alert('Please fill both item name and quantity.');
      return;
    }

    const updatedGroups = groups.map(g => {
      if (g.id === parseInt(id)) {
        const updatedItems = g.items || [];
        updatedItems.push({ name: itemName, quantity });
        g.items = updatedItems;
        return g;
      }
      return g;
    });

    localStorage.setItem('groups', JSON.stringify(updatedGroups));
    setGroup(updatedGroups.find(g => g.id === parseInt(id)));
    setItemName('');
    setQuantity('');
  };

  if (!group) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#999' }}>Group not found</h2>
        <button onClick={() => navigate('/browse')} style={backButtonStyle}>
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Group Details</h1>

      <div style={cardStyle}>
        <h2 style={{ color: '#43a047' }}>{group.vendor}</h2>
        <p><strong>Category:</strong> {group.category}</p>
        <p><strong>Min Order:</strong> ₹{group.minOrder}</p>
        <p><strong>Closes at:</strong> {group.closingTime}</p>
        {group.notes && <p><strong>Notes:</strong> {group.notes}</p>}

        <div style={{ marginTop: '20px' }}>
          <input
            type="text"
            placeholder="Item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleAddItem} style={buttonStyle}>
            ➕ Add Item
          </button>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h4>🛒 Group Items:</h4>
          {group.items && group.items.length > 0 ? (
            <ul>
              {group.items.map((item, index) => (
                <li key={index}>
                  {item.name} — {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items added yet.</p>
          )}
        </div>
      </div>

      <button onClick={() => navigate('/browse')} style={backButtonStyle}>
        ← Back to Browse
      </button>
    </div>
  );
};

const pageStyle = {
  padding: '40px 20px',
  background: 'linear-gradient(to right, #f0f4f7, #e8f5e9)',
  minHeight: '100vh'
};

const titleStyle = {
  textAlign: 'center',
  color: '#2e7d32'
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '30px',
  maxWidth: '500px',
  margin: '30px auto',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '14px'
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  background: 'linear-gradient(to right, #43a047, #66bb6a)',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  marginTop: '10px',
  cursor: 'pointer'
};

const backButtonStyle = {
  marginTop: '20px',
  padding: '8px 16px',
  backgroundColor: '#555',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '14px',
  cursor: 'pointer'
};

export default GroupDetails;

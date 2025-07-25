import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyGroups = () => {
  const [joinedGroups, setJoinedGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const joinedIds = JSON.parse(localStorage.getItem("joinedGroups")) || [];
    const joined = allGroups.filter(group => joinedIds.includes(group.id));
    setJoinedGroups(joined);
  }, []);

  return (
    <div style={wrapperStyle}>
      <h1 style={titleStyle}>🛒 My Joined Groups</h1>

      {joinedGroups.length === 0 ? (
        <p style={emptyTextStyle}>
          You haven’t joined any groups yet. 😕
        </p>
      ) : (
        <div style={gridStyle}>
          {joinedGroups.map(group => (
            <div key={group.id} style={cardStyle}>
              <h3 style={vendorStyle}>{group.vendor}</h3>
              <p><strong>📦 Category:</strong> {group.category}</p>
              <p><strong>💰 Min Order:</strong> ₹{group.minOrder}</p>
              <p><strong>⏰ Closes:</strong> {group.closingTime}</p>

              <button
                onClick={() => navigate(`/group/${group.id}`)}
                style={viewButtonStyle}
              >
                🔍 View Group
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGroups;
const wrapperStyle = {
  padding: '40px 20px',
  background: 'linear-gradient(to right, #fefefe, #e0f2f1)',
  minHeight: '100vh',
  textAlign: 'center'
};

const titleStyle = {
  color: '#2e7d32',
  marginBottom: '30px',
  fontSize: '2.2rem',
  fontWeight: 'bold',
  letterSpacing: '1px'
};

const emptyTextStyle = {
  color: '#999',
  fontSize: '16px',
  marginTop: '20px'
};

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px'
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '25px',
  borderRadius: '12px',
  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
  width: '280px',
  textAlign: 'left',
  fontSize: '15px',
  lineHeight: '1.6',
  transition: 'transform 0.2s',
};

const vendorStyle = {
  color: '#43a047',
  fontSize: '20px',
  marginBottom: '10px',
  fontWeight: '600'
};

const viewButtonStyle = {
  marginTop: '15px',
  padding: '10px 18px',
  background: 'linear-gradient(to right, #43a047, #66bb6a)',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(67,160,71,0.3)'
};


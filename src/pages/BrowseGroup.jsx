import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BrowseGroup = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    console.log('Loaded groups from localStorage:', storedGroups);
    setGroups(storedGroups);
  }, []);
  const handleJoin = (groupId) => {
    const joined = JSON.parse(localStorage.getItem("joinedGroups")) || [];
    if (!joined.includes(groupId)) {
      joined.push(groupId);
      localStorage.setItem("joinedGroups", JSON.stringify(joined));
    }
    navigate(`/group/${groupId}`);
  };

  return (
    <div style={{
      padding: '40px 20px',
      background: 'linear-gradient(to right, #f0f4f7, #e8f5e9)',
      minHeight: '100vh'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#2e7d32',
        marginBottom: '30px',
        textShadow: '1px 1px 4px rgba(0,0,0,0.1)'
      }}>
        Browse Active Groups
      </h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {groups.length === 0 ? (
          <p style={{ color: '#777' }}>No active groups found. Create one!</p>
        ) : (
          groups.map(group => {
            console.log('Rendering group:', group);
            return (
              <div key={group.id} style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                width: '280px',
                transition: 'transform 0.2s'
              }}>
                <h3 style={{ color: '#43a047', marginBottom: '10px' }}>{group.vendor}</h3>
                <p><strong>Category:</strong> {group.category}</p>
                <p><strong>Min Order:</strong> ₹{group.minOrder}</p>
                <p><strong>Closes:</strong> {group.closingTime}</p>
                {group.notes && <p><strong>Notes:</strong> {group.notes}</p>}
                <button onClick={() => handleJoin(group.id)} style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  background: 'linear-gradient(to right, #43a047, #66bb6a)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                  Join Group
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BrowseGroup;

import home from '../assets/home.png';

let Home = () => {
  return (
    <div style={{                    //css for outer div
      padding: '0',
      textAlign: 'center',
      position: 'relative'
    }}>
      <img                            //css for img
        src={home}
        alt="NeighbourMart group buying"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
      />
      {/* <div style={{                         //css for text inner div
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: 0 }}>
          Welcome to
        </h1>
      </div> */}
    </div>
  );
}

export default Home;

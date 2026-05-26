import "./Home.css";
import {useNavigate} from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="container">
          <h2>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet, </p>
          <p>consectetur adipiscing elit.</p>
          <button onClick={() => navigate('/Login')}>Create Account</button>
          <button onClick={() => navigate('/Login')}>Already Registered? Login</button>
        </div>
      </div>
    </>
  );
}

export default Home;

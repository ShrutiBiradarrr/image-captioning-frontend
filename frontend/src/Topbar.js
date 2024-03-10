import "./topbar.css"
import { useNavigate, Link } from 'react-router-dom';

export default function Topbar() {

  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  }
  return (
    <div className="topbarcontainer">
      {/* <div className="topbarleft"> */}
        <div>
          <span className="logo">Image Caption Generator</span>
        </div>
        
    </div>
  )
}

// src/Pages/Home/Home.jsx
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>GitHub Profiler</h1>

      <button onClick={() => navigate("/search")}>Search Users →</button>
    </div>
  );
}

export default Home;

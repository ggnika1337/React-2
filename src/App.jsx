import "./App.css";
import Crypto from "./assets/Components/Crypto Component/Crypto.jsx";
import Time from "./assets/Components/Time Component/Time.jsx";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <div className="hover"></div>
          <img className="eye" src="src\assets\Images\Eye.png" alt="" />
          <img
            className="image"
            src="src\assets\Images\main image.png"
            alt="Equillibrium Image"
          />
        </div>
        <div className="mineral-info">
          <h1 className="mineral-name">Equilibrium #3429</h1>
          <span className="mineral-description">
            Our Equilibrium collection promotes balance and calm.
          </span>
          <div className="price-time">
            <Crypto></Crypto>
            <Time></Time>
          </div>
          <div className="line"></div>
          <div className="person-description">
            <div>
              <img src="src\assets\Images\person.svg" alt="" />
            </div>
            <h1 className="name">
              Creation of <span className="innerName">Jules Wyvern</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import "./Time.css";
import timeImg from "../../Images/time.svg";

function Crypto() {
  return (
    <>
      <div className="time-container">
        <img src={timeImg} alt="" />
        <h1 className="time">3 days left</h1>
      </div>
    </>
  );
}

export default Crypto;

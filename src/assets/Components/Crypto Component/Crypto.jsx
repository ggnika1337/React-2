import "./Crypto.css";
import cryptoImg from "../../Images/crypto.svg";

function Crypto() {
  return (
    <>
      <div className="crypto-container">
        <img src={cryptoImg} alt="" />
        <h1 className="price">0.041 ETH</h1>
      </div>
    </>
  );
}

export default Crypto;

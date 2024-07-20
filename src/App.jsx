import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    {
      plan: "FREE",
      price: 0,
      user: "Single",
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5",
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited",
    },
  ];
  const [priceCardData, setPriceCardData] = useState(initialState);

  return (
    <div className="container">
      <Card priceCardData={priceCardData} />
    </div>
  );
}

function Card({ priceCardData }) {
  return priceCardData.map((val, index) => (
    <div key={index} className="card h-100 shadow-lg">
      <div className="card-body">
        <small className="plan text-muted">{val.plan}</small>
        <h2 className="card-title">${val.price}/month</h2>
        <hr />
        <p className="card-text">
          <Included />
          <span>{val.user} User</span>
          <br />
          <Included />
          <span>50GB Storage</span>
          <br />
          <Included />
          <span>Unlimited Public Projects</span>
          <br />
          <Included />
          <span>Community Access</span>
          <br />
          {index == 0 ? (
            <>
              <Excluded />
              <span className="excluded">Unlimited Private Projects</span>
            </>
          ) : (
            <>
              <Included />
              <span className="included">Unlimited Private Projects</span>
            </>
          )}
          <br />
          {index == 0 ? (
            <>
              <Excluded />
              <span className="excluded">Dedicated Phone Support</span>
            </>
          ) : (
            <>
              <Included />
              <span className="included">Dedicated Phone Support</span>
            </>
          )}
          <br />
          {index == 0 ? (
            <>
              <Excluded />
              <span className="excluded">Free Subdomain</span>
            </>
          ) : (
            <>
              <Included />
              <span className="included">Free Subdomain</span>
            </>
          )}
          <br />
          {index != 2 ? (
            <>
              <Excluded />
              <span className="excluded">Monthly Status Reports</span>
            </>
          ) : (
            <>
              <Included />
              <span className="included">Monthly Status Reports</span>
            </>
          )}
        </p>
        <button type="button" className="btn btn-primary text-uppercase">
          button
        </button>
      </div>
    </div>
  ));
}

function Included() {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"></path>
      </g>
    </svg>
  );
}
function Excluded() {
  return (
    <svg
      fill="#9a9ea2"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"></path>
      </g>
    </svg>
  );
}

export default App;
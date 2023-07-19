import "./styles.css";

import logo from "../logo.png";
import usericon from "../usericon.png";

import { RestaurentList } from "./restaurent";
import React from "react";

import "./restaurent.css";

const Headercomponent = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={usericon} alt="logo" />
      </div>
      <div className="center">
        <input className="input" type="text" placeholder="search.." />
        <button type="button">search</button>
      </div>
      <div className="right">
        <img
          src={logo}
          alt="logo"
          style={{
            width: "40px"
          }}
        />
      </div>
    </header>
  );
};
function Resta({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating
}) {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="Logo"
      />

      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>{avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
}
function Headercomponent1({ restaurent }) {
  return restaurent.map((element) => {
    return (
      <div className="restaurentlist">
        <Resta key={element.data.id} {...element.data} />
      </div>
    );
  });
}

export default function App() {
  return (
    <div className="App">
      <Headercomponent1 restaurent={RestaurentList} />
    </div>
  );
}

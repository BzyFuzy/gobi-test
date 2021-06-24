import { useState } from "react";

const Nav = () => {
  const [showDD, setShowDD] = useState(false);
  return (
    <div className="navbar">
      <ul>
        <li>WOMEN</li>
        <li>MEN</li>
        <li>HOME</li>
        <li>ACCESSORIES</li>
        <li>ORGANIC</li>
      </ul>
      <div className="m-icons">
        <i className="m-menu" />
        <i className="m-search" />
      </div>
      <img alt="logo" src={"/img/logo.svg"} />
      <div className="m-icons" style={{ justifyContent: "flex-end" }}>
        <i className="m-heart" />
        <i className="m-bag" />
      </div>
      <div className="right">
        <div className="dd">
          <SearchInput showDD={showDD} setShowDD={() => setShowDD(!showDD)} />
          <DropwDown showDD={showDD} />
        </div>

        <i className="heart" />
        <i className="bag" />
      </div>
    </div>
  );
};

const SearchInput = ({ showDD, setShowDD }) => {
  return (
    <div
      className="scontainer"
      onClick={(e) => setShowDD()}
      style={{ borderRadius: showDD ? "8px 8px 0 0" : "8px" }}
    >
      <input type="text" placeholder="Search" />
      <i className="cancel" />
    </div>
  );
};

const DropwDown = ({ showDD }) => (
  <div className="dropdown" style={{ display: showDD ? "flex" : "none" }}>
    <div className="navigate"></div>
    <div className="cont">
      <div className="suggest">
        <div style={{ display: "flex" }}>
          <img src="/img/dd.jpg" />
          <div className="info">
            <p>Chill Summer Essential Set</p>
            <div style={{ display: "flex" }}>
              <p className="l">$899</p>
              <p style={{ marginLeft: 4 }} className="r">
                $620.32
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <img src="/img/dd.jpg" />
          <div className="info">
            <p>Chill Summer Essential Set</p>
            <div style={{ display: "flex" }}>
              <p className="l">$899</p>
              <p style={{ marginLeft: 4 }} className="r">
                $620.32
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <img src="/img/dd.jpg" />
          <div className="info">
            <p>Chill Summer Essential Set</p>
            <div style={{ display: "flex" }}>
              <p className="l">$899</p>
              <p style={{ marginLeft: 4 }} className="r">
                $620.32
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <img src="/img/dd.jpg" />
          <div className="info">
            <p>Chill Summer Essential Set</p>
            <div style={{ display: "flex" }}>
              <p className="l">$899</p>
              <p style={{ marginLeft: 4 }} className="r">
                $620.32
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li>Sweater</li>
        <li>Basic</li>
        <li>Cardigans</li>
        <li>Hoodies</li>
        <li>Crew Necks</li>
        <li>Turtle Necks</li>
        <li>V Necks</li>
        <li>Vests & Tops</li>
      </ul>
    </div>
  </div>
);

export default Nav;

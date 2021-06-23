import Special from "./special";

export const Header = () => (
  <div className="header">
    {/* <nav>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li>
          <a class="active" href="#">
            WOMEN
          </a>
        </li>
        <li>
          <a href="#">MEN</a>
        </li>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ACCESSORIES</a>
        </li>
        <li>
          <a href="#">ORGANIC</a>
        </li>
      </ul>
      <div>
        <img alt="logo" src="/img/logo.svg" height="42px" />
      </div>
      <div className="searchContainer">
        <input style={{ height: "100%" }} />
        <div class="dropdown-sub">
          <div class="dropdown-option">option 1</div>
          <div class="dropdown-option">option 2</div>
          <div class="dropdown-option">option 3</div>
        </div>
      </div>
    </nav> */}
    <div className="top row center">
      <ul className="menu row center a1">
        <li>WOMEN</li>
        <li>MEN</li>
        <li>HOME</li>
        <li>ACCESSORIES</li>
        <li style={{ marginRight: 0 }}>ORGANIC</li>
      </ul>
      <div className="logo">
        <img alt="logo" src="/img/logo.svg" height="42px" />
      </div>

      <div style={{ flex: 2, display: "flex", justifyContent: "flex-end" }}>
        <i className="searchicon" />
        <div className="searchContainer">
          <div className="row center">
            <input className="search" placeholder="Search" />
            <i className="cancel" />
          </div>
          <div className="dropdown">
            <div className="test"></div>
            <div style={{ display: "flex" }}>
              <div className="testy"></div>
              <div className="testz"></div>
            </div>
          </div>
        </div>
        <i className="iconw heart" />
        <i className="iconw bag" />
      </div>
    </div>
    <Special />
  </div>
);

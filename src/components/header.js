import Special from "./special";
import NavigationBar from './navbar';

const Header = () => (
  <div className="header">
    <NavigationBar />
    <Special className={"special m-hide"}/>
  </div>
);

export default Header

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
    </header>
  );
}
export default Header;

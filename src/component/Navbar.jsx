/* eslint-disable react/prop-types */

function Navbar({ children }) {
  return (
    <div>
      <nav className="nav-bar">
        <Logo />
        {children}
      </nav>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍥</span>
      <h1>WeeBoo</h1>
      <span role="img">🍥</span>
    </div>
  );
}

export default Navbar;

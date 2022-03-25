import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <h2 className="header-title">Welcome to Shopify, Kevin</h2>
        <div className="setup-bar">
          <p className="header-subheader">Setup guide</p>
          <p className="header-more">...</p>
        </div>
      </header>
    </>
  );
}

export default Header;

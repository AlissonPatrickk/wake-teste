import '../App.css';
const logo = require('../assets/logo.jpg');

const Header = () => {
  return (
    <header className="header-custom">
      <img src={logo} style={{ maxHeight: '50px' }} alt='Logo' />
    </header>
  );
};

export default Header;
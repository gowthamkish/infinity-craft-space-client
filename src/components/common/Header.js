import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../css/Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/thunk/authenticationThunk";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar
      className={styles.header}
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img alt="Header Logo" width={40} height={40} src={logo} />
        </Navbar.Brand>

        <Nav className="justify-content-end">
          {token ? (
            <a onClick={handleLogout} className="text-white p-2">
              Logout
            </a>
          ) : (
            <>
              <Link className="text-white p-2" to="/">
                Login
              </Link>
              <Link className="text-white p-2" to="/register">
                Register
              </Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

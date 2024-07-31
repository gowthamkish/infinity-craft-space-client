import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { envVariables } from "../../utils/envVariables";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../redux/thunk/authenticationThunk";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const obj = {
      email,
      password,
    };

    dispatch(fetchLogin(obj));
  };

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }

  }, [token]);

  return (
    <Container>
      <br />

      <h1 className="text-center text-primary">Login</h1>

      <br />

      <Row className="justify-content-center">
        <Col md={6}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <br />

      <Row className="justify-content-center">
        <Col className="text-center" md={6}>
          <Button onClick={handleLogin} variant="primary">
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

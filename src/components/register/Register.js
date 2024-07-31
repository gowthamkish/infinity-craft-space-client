import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { envVariables } from "../../utils/envVariables";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleRegister = () => {
    debugger;
    const obj = {
      name,
      email,
      password,
      confPassword,
    };

    axios
      .post(`${envVariables.baseUrl}user/register`, obj)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
      });
  };

  return (
    <Container>
      <br />

      <h1 className="text-center text-primary">Register</h1>

      <br />

      <Row className="justify-content-center">
        <Col md={6}>
          <FloatingLabel controlId="name" label="Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <FloatingLabel
            controlId="email"
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
          <FloatingLabel controlId="password" label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <FloatingLabel controlId="confPassword" label="Confirm Password">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <br />

      <Row className="justify-content-center">
        <Col className="text-center" md={6}>
          <Button onClick={handleRegister} variant="primary">
            Register
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

import React, { useState } from "react";
import axios from "axios";
import { Container, Spinner, Form, Button, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function StudentRegistration(props) {
  const [user, setUser] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/";

  const saveUser = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      password: user.password,
    };
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        props.history.push("/show/" + result.data._id);
      })
      .catch((error) => setShowLoading(false));
  };

  const onChange = (e) => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container>
        <div className="text-center">
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
              width: "50vw",
              height: "50vh",
            }}
          >
            {showLoading && (
              <Spinner animation="border" role="status"></Spinner>
            )}
            <h1>REGISTER</h1>
            <Form onSubmit={saveUser}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                      }}
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter first name"
                      value={user.firstName}
                      onChange={onChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                      }}
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter last name"
                      value={user.lastName}
                      onChange={onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="text"
                  name="email"
                  id="email"
                  rows="3"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter user name"
                  value={user.username}
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  value={user.password}
                  onChange={onChange}
                />
              </Form.Group>

              <Button
                style={{
                  border: "none",
                  color: "white",
                  padding: "15px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "15px",
                  fontWeight: "bold",
                  margin: "10px",
                }}
                variant="primary"
                type="submit"
              >
                REGISTER
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default withRouter(StudentRegistration);

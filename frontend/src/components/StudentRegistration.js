import React, { useState } from "react";
import axios from "axios";
import { Container, Spinner, Form, Button, Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

function StudentRegistration(props) {
  const [student, setStudent] = useState({
    _id: "",
    studentNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    address: "",
    city: "",
    phoneNumber: "",
    program: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/";

  const saveStudent = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      studentNumber: student.studentNumber,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      username: student.username,
      password: student.password,
      address: student.address,
      city: student.city,
      phoneNumber: student.phoneNumber,
      program: student.program,
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
    setStudent({ ...student, [e.target.name]: e.target.value });
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
            <Form onSubmit={saveStudent}>
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
                  name="studentNumber"
                  id="studentNumber"
                  rows="3"
                  placeholder="Student number"
                  value={student.studentNumber}
                  onChange={onChange}
                />
              </Form.Group>
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
                      placeholder="First name"
                      value={student.firstName}
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
                      placeholder="Last name"
                      value={student.lastName}
                      onChange={onChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
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
                      name="email"
                      id="email"
                      rows="3"
                      placeholder="Email"
                      value={student.email}
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
                      name="username"
                      id="username"
                      placeholder="Username"
                      value={student.username}
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
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={student.password}
                  onChange={onChange}
                />
              </Form.Group>
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
                      name="address"
                      id="address"
                      rows="3"
                      placeholder="Address"
                      value={student.address}
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
                      name="city"
                      id="city"
                      rows="3"
                      placeholder="City"
                      value={student.city}
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
                  name="phoneNumber"
                  id="phoneNumber"
                  rows="3"
                  placeholder="Phone number"
                  value={student.phoneNumber}
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
                  name="program"
                  id="program"
                  rows="3"
                  placeholder="Program"
                  value={student.program}
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
              <Link to="/">
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
                  variant="danger"
                  type="button"
                >
                  CANCEL
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default withRouter(StudentRegistration);

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Spinner, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function EditStudent(props) {
  const [student, setStudent] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:3000/students/" + props.match.params.id;
  //runs only once after the first render
  useEffect(() => {
    setShowLoading(false);
    //call api
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setStudent(result.data);
      console.log(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  const updateStudent = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      username: student.username,
    };
    axios
      .put(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        props.history.push("/show/" + result.data._id);
      })
      .catch((error) => setShowLoading(false));
  };
  //runs when student enters a field
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
            <h1>UPDATE STUDENT</h1>
            <Form onSubmit={updateStudent}>
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
                Update
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default withRouter(EditStudent);

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Spinner, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function ShowStudent(props) {
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:3000/students/" + props.match.params.id;

  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setData(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  const editStudent = (id) => {
    props.history.push({
      pathname: "/edit/" + id,
    });
  };

  const deleteStudent = (id) => {
    setShowLoading(true);
    const student = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      username: data.username,
      password: data.password,
    };

    axios
      .delete(apiUrl, student)
      .then((result) => {
        setShowLoading(false);
        props.history.push("/list");
      })
      .catch((error) => setShowLoading(false));
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
            <h1>
              Name: {data.firstName}, {data.lastName}
            </h1>
            <p>Email: {data.email}</p>
            <p>Username: {data.username}</p>

            <p>
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
                type="button"
                variant="primary"
                onClick={() => {
                  editStudent(data._id);
                }}
              >
                Edit
              </Button>
              &nbsp;
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
                type="button"
                variant="danger"
                onClick={() => {
                  deleteStudent(data._id);
                }}
              >
                Delete
              </Button>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default withRouter(ShowStudent);

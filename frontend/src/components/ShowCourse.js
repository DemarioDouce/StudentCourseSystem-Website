import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Spinner, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function ShowCourse(props) {
  console.log("props.match.params", props.match.params.id);
  const [data, setData] = useState({});
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:3000/api/courses/" + props.match.params.id;

  useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      console.log("results from courses", result.data);

      setData(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  const editCourse = (id) => {
    props.history.push({
      pathname: "/editcourse/" + id,
    });
  };

  const deleteCourse = (id) => {
    setShowLoading(true);
    const course = { courseCode: data.courseCode, courseName: data.courseName };
    //
    axios
      .delete(apiUrl, course)
      .then((result) => {
        setShowLoading(false);
        props.history.push("/listcourses");
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

            <h1>Course name: {data.courseName}</h1>
            <p1>Course code: {data.courseCode}</p1>

            <div>
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
                  editCourse(data._id);
                }}
              >
                Edit
              </Button>

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
                  deleteCourse(data._id);
                }}
              >
                DROP
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default withRouter(ShowCourse);

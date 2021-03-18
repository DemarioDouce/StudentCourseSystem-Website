import axios from "axios";
import { Container, Spinner, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import React, { useState } from "react";

//
function CreateCourse(props) {
  //
  const username = props.screen;
  console.log("props.screen", props.screen);
  const [course, setCourse] = useState({
    _id: "",
    courseCode: "",
    courseName: "",
    section: "",
    semester: "",
    username: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  //
  const apiUrl = "http://localhost:3000/api/courses";
  //
  const saveCourse = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      courseCode: course.courseCode,
      courseName: course.courseName,
      section: course.section,
      semester: course.semester,
      username: username,
    };
    //
    axios
      .post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        console.log("results from save course:", result.data);
        props.history.push("/showcourse/" + result.data._id);
      })
      .catch((error) => setShowLoading(false));
  };
  //
  const onChange = (e) => {
    e.persist();
    setCourse({ ...course, [e.target.name]: e.target.value });
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
            <h1>ADD COURSE</h1>
            <p>Hello {username} you may add your course.</p>
            {showLoading && (
              <Spinner animation="border" role="status"></Spinner>
            )}
            <Form onSubmit={saveCourse}>
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
                  name="courseCode"
                  id="courseCode"
                  placeholder="Course code"
                  value={course.courseCode}
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
                  type="textarea"
                  rows="3"
                  name="courseName"
                  id="courseName"
                  placeholder="Course name"
                  value={course.courseName}
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
                  rows="3"
                  name="section"
                  id="section"
                  placeholder="Section"
                  value={course.section}
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
                  rows="3"
                  name="semester"
                  id="semester"
                  placeholder="Semester"
                  value={course.semester}
                  onChange={onChange}
                />
              </Form.Group>
              <Button
                style={{
                  backgroundColor: "#e48257",
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
                ADD
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default withRouter(CreateCourse);

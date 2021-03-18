import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Spinner, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function EditCourse(props) {
  console.log("editstudent props:", props.match.params);
  const [course, setCourse] = useState({
    _id: "",
    courseCode: "",
    courseName: "",
    section: "",
    semester: "",
  });
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:3000/api/courses/" + props.match.params.id;
  //runs only once after the first render
  useEffect(() => {
    setShowLoading(false);
    //call api
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setCourse(result.data);
      console.log(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  const updateCourse = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      _id: "",
      courseCode: course.courseCode,
      courseName: course.courseName,
      section: course.section,
      semester: course.semester,
    };
    axios
      .put(apiUrl, data)
      .then((result) => {
        console.log("after calling put to update", result.data);
        setShowLoading(false);
        props.history.push("/showcourse/" + result.data._id);
      })
      .catch((error) => setShowLoading(false));
  };
  //runs when student enters a field
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
            {showLoading && (
              <Spinner animation="border" role="status"></Spinner>
            )}
            <h1>UPDATE COURSE</h1>
            <Form onSubmit={updateCourse}>
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
                  type="text"
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
                  name="semester"
                  id="semester"
                  placeholder="Semester"
                  value={course.semester}
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
                UPDATE
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default withRouter(EditCourse);

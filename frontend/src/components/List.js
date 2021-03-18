import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Spinner, ListGroup } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Login from "./Login";

function List(props) {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:3000/students";

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(apiUrl)
        .then((result) => {
          console.log("result.data:", result.data);
          //check if the student has logged in
          if (result.data.screen !== "auth") {
            console.log("data in if:", result.data);
            setData(result.data);
            setShowLoading(false);
          }
        })
        .catch((error) => {
          console.log("error in fetchData:", error);
        });
    };
    fetchData();
  }, []);

  const showDetail = (id) => {
    props.history.push({
      pathname: "/show/" + id,
    });
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
            {data.length !== 0 ? (
              <div>
                {showLoading && (
                  <Spinner animation="border" role="status"></Spinner>
                )}
                <h1>STUDENT LIST</h1>
                <ListGroup>
                  {data.map((item, idx) => (
                    <ListGroup.Item
                      style={{
                        width: "100%",
                        padding: "12px 20px",
                        margin: "8px 0",
                        display: "inline-block",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                      }}
                      key={idx}
                      action
                      onClick={() => {
                        showDetail(item._id);
                      }}
                    >
                      {item.username}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
              <Login />
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
//
export default withRouter(List);

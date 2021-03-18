import React, { useState, useEffect } from "react";

import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//
import View from "./View";
//
function App() {
  //state variable for the screen, admin or student
  const [screen, setScreen] = useState("auth");
  //store input field data, user name and password
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const apiUrl = "http://localhost:3000/signin";
  //send username and password to the server
  // for initial authentication
  const auth = async () => {
    console.log("calling auth");
    console.log(username);
    try {
      //make a get request to /authenticate end-point on the server
      const loginData = { auth: { username, password } };
      //call api
      const res = await axios.post(apiUrl, loginData);
      console.log(res.data.auth);
      console.log(res.data.screen);
      //process the response
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        console.log(res.data.screen);
      }
    } catch (e) {
      //print the error
      console.log(e);
    }
  };

  //check if the student already logged-in
  const readCookie = async () => {
    try {
      console.log("--- in readCookie function ---");

      //
      const res = await axios.get("/read_cookie");
      //
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        console.log(res.data.screen);
      }
    } catch (e) {
      setScreen("auth");
      console.log(e);
    }
  };
  //runs the first time the view is rendered
  //to check if student is signed in
  useEffect(() => {
    readCookie();
  }, []); //only the first render
  //
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
            {screen === "auth" ? (
              <Form>
                <h1>LOGIN</h1>
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
                    name="username"
                    id="username"
                    rows="3"
                    placeholder="Username"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
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
                    name="password"
                    id="password"
                    rows="3"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  style={{
                    backgroundColor: "#4CAF50",
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
                  type="button"
                  onClick={auth}
                >
                  LOGIN
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
            ) : (
              <>
                <View screen={screen} setScreen={setScreen} />
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;

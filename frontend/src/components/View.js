import CreateCourse from "./CreateCourse";
import React, { useState } from "react";
//
import axios from "axios";
import { Button, Container } from "react-bootstrap";
//
function View(props) {
  // read the info from props, coming from the ancestor component
  const { screen, setScreen } = props;
  // return a stateful value and funcion to update it
  const [data, setData] = useState();
  //
  const [article, setArticle] = useState("");
  // called when student clicks on Logout button
  // to clear the cookie and set the screen state variable
  // back to its initial state.
  const deleteCookie = async () => {
    try {
      await axios.get("/signout");
      setScreen("auth");
    } catch (e) {
      console.log(e);
    }
  };
  // called when student clicks on Get Data button
  // end-point demonstrates another example for the use
  // of cookie specific response from the server.
  const verifyCookie = async () => {
    try {
      const res = await axios.get("/welcome");
      console.log(res.data);
      setData("Cookie varified " + res.data + ".");
    } catch (e) {
      console.log(e);
    }
  };
  //
  const listArticles = (username) => {
    console.log("in lisArticles: ", username);
    //setArticle('n')
  };
  //
  const createArticle = () => {
    console.log("in createArticle");
    setArticle("y");
  };
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
            {article !== "y" ? (
              <>
                <h1>DASHBOARD</h1>
                <p>Welcome back {screen}.</p>
                <p>{data}</p>
                <Button
                  style={{
                    backgroundColor: "#3a6351",
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
                  onClick={verifyCookie}
                >
                  VERIFY COOKIE
                </Button>

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
                  type="button"
                  onClick={createArticle}
                >
                  ADD COURSE
                </Button>
                <Button
                  style={{
                    backgroundColor: "#393232",
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
                  onClick={listArticles(data)}
                >
                  LIST ALL COURSE
                </Button>

                <Button
                  style={{
                    backgroundColor: "#ac0d0d",
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
                  onClick={deleteCookie}
                >
                  LOGOUT
                </Button>
              </>
            ) : (
              <CreateCourse screen={screen} setScreen={setScreen} />
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

//
export default View;

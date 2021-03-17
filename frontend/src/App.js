import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function App() {
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
            <h1>STUDENT COURSE SYSTEM</h1>
            <div>
              <Link to="/login">
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
                >
                  LOGIN
                </Button>
              </Link>
              <Link to="/register">
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
                >
                  REGISTER
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default App;

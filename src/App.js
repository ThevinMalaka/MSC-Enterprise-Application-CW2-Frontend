import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import ReduxToastr from "react-redux-toastr";

import { UnauthorizedRouter, AuthorizedRouter } from "./navigation/routers";
import TopNavBar from "./components/topNavBar";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import { getIsLoggedIn } from "./views/login/selectors";

const App = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const token = localStorage.getItem("token");
  return (
    <>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      {isLoggedIn || token ? (
        <Container fluid className="main-container">
          <Row>
            <Col>
              <TopNavBar />
              <div className="main-router-container" style={{ marginTop: 100 }}>
                <AuthorizedRouter />
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid className="main-container">
          <Row>
            <Col>
              <div className="main-router-container">
                <UnauthorizedRouter />
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default App;

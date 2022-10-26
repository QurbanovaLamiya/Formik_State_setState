import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import FormArea from "../FormArea";
import FromUserInfo from "../FormUserInfo";

class FormContent extends Component {
  render() {
    return (
      <Row className="d-flex flex-column align-items-center my-5 py-5 mx-auto w-75 border border-dark">
        <Col lg={7} className="text-center">
          <h1>Create An Account</h1>
          <p>
            Create an account to enjoy all the services without any ads for
            free!
          </p>
        </Col>
        <Col lg={7}>
          <FormArea />
        </Col>
        <Col lg={7}>
          <FromUserInfo />
        </Col>
      </Row>
    );
  }
}

export default FormContent;

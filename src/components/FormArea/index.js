import { Component, Fragment } from "react";
import { Button, FormLabel, FormGroup } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

class FormArea extends Component {
  ErrorMessage(values) {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  }

  render() {
    return (
      <Fragment>
        <Formik
          initialValues={{ fullName: "", email: "", password: "" }}
          validate={this.ErrorMessage}
          onSubmit={this.props.onSubmit}
        >
          <Form className="border border-dark p-3">
            <FormGroup
              className="d-flex flex-column my-4"
              controlId="formBasicFullName"
            >
              <FormLabel>Full name</FormLabel>
              <Field
                type="text"
                name="fullName"
                placeholder="Full name"
                className="rounded p-2"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-danger px-3"
              />
            </FormGroup>

            <FormGroup
              className="d-flex flex-column  my-4"
              controlId="formBasicEmail"
            >
              <FormLabel>Email</FormLabel>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="rounded p-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger px-3"
              />
            </FormGroup>

            <FormGroup
              className="d-flex flex-column  my-4"
              controlId="formBasicPassword"
            >
              <FormLabel>Password</FormLabel>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="rounded p-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger px-3"
              />
            </FormGroup>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Formik>
      </Fragment>
    );
  }
}

export default FormArea;

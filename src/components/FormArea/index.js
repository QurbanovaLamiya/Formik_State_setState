import { Component, Fragment } from "react";
import { Button, FormLabel, FormGroup } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

class FormArea extends Component {
  render() {
    return (
      <Fragment>
        <Formik
        //    initialValues={{ email: '', password: '' }}
        //    validate={}
        //    onSubmit={}
        >
          <Form className="border border-dark p-3">
            <FormGroup
              className="d-flex flex-column my-4"
              controlId="formBasicFullName"
            >
              <FormLabel>Full name</FormLabel>
              <Field type="text" name="fullName" placeholder="Full name" className="rounded p-2"/>
              <ErrorMessage name="fullName" component="div" />
            </FormGroup>

            <FormGroup
              className="d-flex flex-column  my-4"
              controlId="formBasicEmail"
            >
              <FormLabel>Email</FormLabel>
              <Field type="email" name="email" placeholder="Email" className="rounded p-2" />
              <ErrorMessage name="email" component="div" />
            </FormGroup>

            <FormGroup
              className="d-flex flex-column  my-4"
              controlId="formBasicPassword"
            >
              <FormLabel>Password</FormLabel>
              <Field type="password" name="password" placeholder="Password" className="rounded p-2"/>
              <ErrorMessage name="password" component="div" />
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

import { Component, Fragment } from "react";
import Table from "react-bootstrap/Table";

class FormUserInfo extends Component {
  render() {
    return (
      <Fragment>
        <Table striped bordered hover className="mt-5 border border-dark">
          <thead>
            <tr>
              <th className="col-4">Full name</th>
              <th className="col-4">Email</th>
              <th className="col-4">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-4 py-3">{this.props.userInfo?.fullName}</td>
              <td className="col-4 py-3">{this.props.userInfo?.email}</td>
              <td className="col-4 py-3">{this.props.userInfo?.password}</td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default FormUserInfo;

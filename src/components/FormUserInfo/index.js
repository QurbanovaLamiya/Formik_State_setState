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
              <td className="col-4">Mark</td>
              <td className="col-4">Otto</td>
              <td className="col-4">@mdo</td>
            </tr>
         
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default FormUserInfo;

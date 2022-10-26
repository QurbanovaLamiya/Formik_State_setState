import { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import FormContent from "./components/FormContent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <FormContent />
        </Container>
      </Fragment>
    );
  }
}

export default App;

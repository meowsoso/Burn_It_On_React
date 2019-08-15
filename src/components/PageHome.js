import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class PageHome extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={12}>
            Home
          </Col>
        </Row>
      </Container>
    );
  }

  constructor(props) {
    super(props);
  }
}

export default PageHome;

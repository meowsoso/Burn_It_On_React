import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class AppHeader extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar>
          <Navbar.Brand>Burning AIRLINE</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">
              <Nav.Item eventKey={1}>Home</Nav.Item>
            </Nav.Link>

            {this.props.appState.pages.map(page => (
              <Nav.Link key={"page_" + page.id} href={"/page/" + page.id}>
                <Nav.Item eventKey={"2." + page.id}>{page.title}</Nav.Item>
              </Nav.Link>
            ))}
          </Nav>
          <Nav pullRight>
            {!this.props.appState.jwt && (
              <Nav.Link href="/sign-in">
                <Nav.Item eventKey={3}>Sign In</Nav.Item>
              </Nav.Link>
            )}

            {this.props.appState.jwt && (
              <Nav.Link href="/sign-out">
                <Nav.Item eventKey={4}>Sign Out</Nav.Item>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(AppHeader);

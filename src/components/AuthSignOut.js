import React from "react";

class AuthSignOut extends React.Component {
  render() {
    return null;
  }

  constructor(props) {
    super(props);
    this.props.propagateSignOut(this.props.history);
  }
}

export default AuthSignOut;

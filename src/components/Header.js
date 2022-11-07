import React, { PureComponent } from "react";

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <div className="headerTitle">CV CREATOR</div>
      </header>
    );
  }
}

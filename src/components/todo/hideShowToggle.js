import React from 'react';
import { ToggleContext } from '../context/showHide';

class Content extends React.Component {

  static contextType = ToggleContext;

  render() {
    return (
      <>
        <button onClick={this.context.changeStause}>{this.context.status} completed Items </button>
      </>
    );
  }
}

export default Content;
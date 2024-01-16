import React from 'react';

class ClickableButton extends React.Component {
  handleClick = () => {
    alert('Button đã được click!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
}

export default ClickableButton;

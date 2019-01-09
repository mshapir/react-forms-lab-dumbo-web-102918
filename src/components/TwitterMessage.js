import React from "react";

var maxChars = 140
class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "Hello, World",
      chars_left: maxChars
    };
  }

  handleChange = event => {
    console.log(event.target.value.length);
    this.setState({
      message: event.target.value,
      chars_left: maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} onChange={event => this.handleChange(event)}/>
        <p>{this.state.chars_left}</p>
      </div>
    );
  }
}

export default TwitterMessage;

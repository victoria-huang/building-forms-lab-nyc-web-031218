import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({ type: 'ADD_BAND', band: this.state.text })
    this.setState({
      text: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band</label>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;

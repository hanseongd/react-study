import React, {Component} from 'react';
import {connect} from "react-redux";
import {addPlayer} from "../redux/actions";

export class AddPlayerForm extends Component {
  textInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="enter a player's name" ref={this.textInput}/>
        <input type="submit" value="Add Player" />
      </form>
    )
  }
}

export default connect(null, {addPlayer})(AddPlayerForm)
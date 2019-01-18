import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addGrocery } from "./Redux/actions/actions";
import GroceryList from "./GroceryList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceryItem: ""
    };
  }

  onChange = event => {
    this.setState({
      groceryItem: event.target.value
    });
  };

  onSubmit = () => {
    this.props.addGroceries(this.state.groceryItem);
    this.setState({
      groceryItem: ""
    });
  };

  render() {
    return (
      <div className="App">
        <input
          onChange={this.onChange}
          value={this.state.groceryItem}
          type="text"
          className="groceryName"
        />
        <button onClick={this.onSubmit} className="submitButton">
          Submit
        </button>
        <GroceryList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addGroceries: groceryItem => dispatch(addGrocery(groceryItem))
});

export default connect(
  null,
  mapDispatchToProps
)(App);

import React, { Component } from "react";
import { connect } from "react-redux";
import { addGrocery } from "./Redux/actions/actions";
import GroceryList from "./GroceryList";
import styled from 'styled-components';


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
      <AppWrapper>
        <AppControls>
          <AppInput
            onChange={this.onChange}
            value={this.state.groceryItem}
            type="text"
            className="groceryName"
            placeholder="Grocery Item"
          />
          <SubmitGroceryButton onClick={this.onSubmit} className="submitButton">
            Submit
          </SubmitGroceryButton>
        </AppControls>

        <GroceryList />

      </AppWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addGroceries: groceryItem => dispatch(addGrocery(groceryItem))
});

const AppWrapper = styled.div`
  height: 100vh;
  border: solid black 2px;
  text-align: center;
`;

const AppInput = styled.input`
  height: 50px;
`;

const AppControls = styled.div``

const SubmitGroceryButton = styled.button`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;


export default connect(
  null,
  mapDispatchToProps
)(App);

import React, { Component } from "react";
import { connect } from "react-redux";
import { removeGrocery } from "./Redux/actions/actions";
import styled from "styled-components";


class GroceryList extends Component {
  
  handleRemoveGroceryItem = groceryItemIndex => {
    this.props.removeGrocery(groceryItemIndex);
  };

  renderGroceries = () => {
    return this.props.groceries.map((grocery, groceryItemIndex) => {
      return (
        <GroceryListWrapper>
           <GroceryItemWrapper>
            <h1>{grocery}</h1>
            <button onClick={() => this.handleRemoveGroceryItem(groceryItemIndex)}>
             Delete
            </button>
          </GroceryItemWrapper>
        </GroceryListWrapper>
      );
    });
  };

  render() {
    return <div className="groceryList">{this.renderGroceries()}</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  removeGrocery: groceryIndex => dispatch(removeGrocery(groceryIndex))
});

const mapStateToProps = state => ({
  groceries: state.groceries
});

//We're using mapStateToProps here because we want to grab the array of groceries, make it into a prop we can use on this component. It is read only. We are not changing state in this component with this function.

const GroceryListWrapper = styled.div`
  
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const GroceryItemWrapper = styled.div`
  height: 100px;
  width: 100px;
  border: solid black 2px;
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);

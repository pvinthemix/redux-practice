import React, { Component } from "react";
import { connect } from "react-redux";
import { removeGrocery } from "./Redux/actions/actions";

class GroceryList extends Component {
  handleRemoveGroceryItem = groceryItemIndex => {
    this.props.removeGrocery(groceryItemIndex);
  };

  renderGroceries = () => {
    console.log(this.props);
    return this.props.groceries.map((grocery, groceryItemIndex) => {
      return (
        <div>
          <h1>{grocery}</h1>
          <button
            onClick={() => this.handleRemoveGroceryItem(groceryItemIndex)}
          >
            Delete
          </button>
        </div>
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

//We're using map states to props here because we want to grab the array of groceries, make it into a prop we can use on this component. It is read only. We are not changing state in this component with this function.

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);

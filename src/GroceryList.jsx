import React, { Component } from 'react';
import { connect } from 'react-redux';



class GroceryList extends Component {

renderGroceries = () => {
  console.log(this.props)
  return this.props.groceries.map((grocery) => {
    return (
      <h1>{grocery}</h1>
    )
  })
}

  render(){
    return(
      <div className="groceryList">
        {this.renderGroceries()}
      </div> 
    )
  }
}


const mapStateToProps = (state) => ({
  groceries: state.groceries 
})

export default connect(mapStateToProps)(GroceryList);
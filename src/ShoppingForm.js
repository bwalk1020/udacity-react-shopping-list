import React, {Component} from 'react';

class ShoppingList extends Component {

	render(){
    	return (
      		<form onSubmit={this.props.addItem}>
              <input
                type="text"
                placeholder="Enter New Item"
                value={this.props.value}
                onChange={this.props.onInputChange}
              />
              <button disabled={this.props.onSubmitCheckEmpty()}>Add</button>
            </form>
        )
    }
}

export default ShoppingList;
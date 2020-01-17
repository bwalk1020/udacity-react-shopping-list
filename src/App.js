import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ShoppingForm from './ShoppingForm.js';
import ShoppingList from './ShoppingList.js';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
		<Header logo={logo}/>
       <h2>Shopping List</h2>
        <ShoppingForm value={this.state.value} 
					  onInputChange={this.handleChange} 
					  onSubmitCheckEmpty={this.inputIsEmpty} 
 					  addItem={this.addItem}
		/>

        <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          Delete Last Item
        </button>

        <p className="items">Items</p>
        <ShoppingList items={this.state.items}/>
      </div>
    );
  }
}

export default App;

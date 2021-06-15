import React from "react";
import GroceryList from './GroceryList.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { name: "bread", price: 2 }, 
        { name: "milk", price: 1 },
        { name: "bananas", price: 4 },
        { name: "frozen pizza", price: 7 },
        { name: "brussels sprouts", price: 4 }
      ]
    }
  }
  render() {
    return (
      <GroceryList items={this.state.items}/>
    );
  }
}

export default App;

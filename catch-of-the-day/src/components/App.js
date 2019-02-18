//Brings in all the necessary resources
import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  //Initialize State as a (data) property in this parent component so the data is available globally
  state = {
    //Set the state in an appropriate shape/type (array, string, int), we used object
    fishes: {},
    order: {}
  };
  //0A. This method is accessed by the AddFishForm component (two levels down) using Props
  addFish = fish => {
    // 1. Get data from addFish into fishes
    // Take a copy of the existing State (you never want to mutate [edit] the source data).
    // The 3 periods are an "object spread"
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to State using set State API
    // Automatically triggers an update to anything else using this State
    // "fishes: fishes" is the same as "fishes"
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //1. Take a copy of state
    const order = { ...this.state.order };
    //2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    //3. Call setState to update our State object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/* Component1 */}
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        {/* Component2 */}
        <Order />
        {/* Component3 */}
        {/* 0B. This is the Props which passes addFish down to Inventory */}
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

//Surfaces the data
export default App;

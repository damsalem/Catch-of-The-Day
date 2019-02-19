import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  // These are empty references
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  };

  createFish = event => {
    //1. Stop the form from submitting
    event.preventDefault();
    //2. Get the data from the input
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value), //Parses into a number with a decimal (float)
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    //3. Update the state
    //0D. Use the method inherited from App.js > Inventory.js
    this.props.addFish(fish);
    // Refresh the form using built in reset method
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          type="text"
          placeholder="Desc"
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;

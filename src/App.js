import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    brand: "",
    roast: "",
    price: ""
  }

  changeHandler = (event) => {
    console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = () => {
    console.log(this.state)
  }

  render(){
      return (
        <div className="App">
          <br/>
          <br/>
          Enter Coffee Information
          <br/>

          {/* Test form where user will enter coffee information */}

          <form>
            <input type="text" name="brand" placeholder="Enter brand..." value={this.state.brand} onChange={this.changeHandler}/>
            <br/>
            <input type="text" name="roast" placeholder="Enter roast level..." value={this.state.roast} onChange={this.changeHandler}/>
            <br/>
            <input type="number" name="price" placeholder="Enter price..." value={this.state.price} onChange={this.changeHandler}/>
            <br/>
            <input type="submit" value="submit"/>
          </form>

          <br/>
          <br/>

          {/* When user presses submit, coffee information will be added to data base
          as a unique instance of coffee and then displayed below in coffee information */}

          Coffee Information:



        </div>
      );
  }


}

export default App;

import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Personal_Information from './personal_information/Personal_Information';
import logo from './images/byoin_final.png'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      start: false,
      gender: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      telephoneNumber: "",
      email: ""
    }
  };

  handleLol = () => {
    console.log("That was fuckin awesome.");
  }
  handleStateChange = (name, value) => {
    this.setState(
        {name: value}
    );
  }

  handleOnClick = () => {
    this.setState(
      {start: true}
    );
  }

  render(){
    if (this.state.start) {
      return(
        <Router>
          <Route path='/Personal_Information' render={(props) => <Personal_Information {...props} lol={this.handleLol}/>}/>
          <Redirect to='/Personal_Information' />
        </Router>
      );
    } else{
      return(
        <div>
          <Container textAlign='center'>
            <p></p>
            <Image src={ logo } size='medium' centered />
            <p>
              Hi, we are Byoin and we want to make your journey through the
              hospital as smooth and uncomplicated as possible.
            </p>
            <p>
              Please fill out the following digital form so that the
              doctors can get an impression of your condition
              as well as your medical history.
            </p>
            <Button color='black' onClick={this.handleOnClick}>START</Button>
          </Container>
        </div>
      );
    }
  }
}

export default App;

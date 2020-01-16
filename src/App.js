import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Personal_Information from './personal_information/Personal_Information';
import logo from './images/byoin_final.png'
import Medicine from './medicines/Medicine'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      start: false,
      gender: "",

      // Personal Information
      firstName: "",
      lastName: "",
      birthDate: "",
      telephoneNumber: "",
      email: "",

      // Medicines
      medicines:[Medicine],

      // Allergies
      // totally missing atm!!!

      // Diseases
      psoriasis: false,
      whiteSkinCancer: false,
      blackSkinCancer: false,
      hiv: false,
      neurodermatitis: false,
      highBloodPreasure: false,
      thrombosis: false,

      // Further Diseases
      smoker: false,
      alcohol: false,
      pregnant: false,

      // Condition
      conditionFirstOccurence: true,
      conditionDateOfAppearance: '',
      conditionDescription: '',
      conditionBodysite: '',
      //Further symptoms missing atm!!!
    }
  };

  handleInformationChange = (field, value) => {
    this.setState(
        {[field]: value}
    , () => console.log(this.state));
  }

  handleArrayChange = () => {
    console.log('Hello');
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
          <Route path='/Personal_Information' render={(props) => <Personal_Information {...props} changeInformation={ this.handleInformationChange } patientData={ this.state } changeArray={ this.handleArrayChange }/>}/>
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

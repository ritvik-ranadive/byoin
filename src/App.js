import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
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
      medicines:[''],

      // Allergies
      allergies:[''],

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
      symptoms:['']
    }
  };

  handleInformationChange = (field, value) => {
    this.setState(
        {[field]: value}
    , () => console.log(this.state));
  }

  handleOnClick = () => {
    this.setState(
      {start: true}
    );
  }

  render(){
    console.log(this.state.gender, this.state.firstName, this.state.lastName, this.state.birthDate);
    if (this.state.start) {
      return(
        <Router>
          <Route path='/Personal_Information' render={(props) => <Personal_Information {...props} changeInformation={ this.handleInformationChange } patientData={ this.state }/>}/>
          <Redirect to='/Personal_Information' />
        </Router>
      );
    } else{
      return(
        <div>
          <Container textAlign='center'>
            <p></p>
            <Image src={ logo } size='medium' centered />
            <br/>
            <p>
              Hi, we are Byoin and we want to make your journey through the
              hospital as smooth and uncomplicated as possible.
            </p>
            <p>
              Please fill out the following form so that the
              doctors can get an impression of your condition
              as well as your medical history.
            </p>
            <br/><br/>
            <Button color='black' onClick={this.handleOnClick}>START</Button>
          </Container>
        </div>
      );
    }
  }
}

export default App;

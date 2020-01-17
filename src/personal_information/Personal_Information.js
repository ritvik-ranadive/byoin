import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Dropdown, Input, Form, Icon } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { DateInput } from 'semantic-ui-calendar-react';
import Personal_Information_Hint from './Hint';
import App from '../App'
import Medicines from '../medicines/Medicines'

const genderOptions = [
    {
        key: "Mr",
        text: "Mr",
        value: "Mr"
    },
    {
        key: "Mrs",
        text: "Mrs",
        value: "Mrs"
    }
]

class Personal_Information extends Component{

    constructor(props){
        super(props);
        this.state = {
            date: this.props.patientData.birthDate,
            next: false,
            hint: false,
            back: false,
            gender: this.props.patientData.gender,
            firstName: this.props.patientData.firstName,
            lastName: this.props.patientData.lastName,
            email: this.props.patientData.email,
            telephoneNumber: this.props.patientData.telephoneNumber
        };
    }

    handleChange = (event, {name, value}) => {
        //console.log(name, value);
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value });
        }
        this.props.changeInformation('birthDate', value);
    }

    handleGender = (event, {value}) => {
        this.props.changeInformation('gender', value);
    }

    handleFirstName = (event, {value}) => {
        this.props.changeInformation('firstName', value);
    }

    handleLastName = (event, {value}) => {
        this.props.changeInformation('lastName', value);
    }

    handleTelephoneNumber = (event, {value}) => {
        this.props.changeInformation('telephoneNumber', value);
    }

    handleEmail = (event, {value}) => {
        this.props.changeInformation('email', value);
    }

    handleNext = () => {
        this.setState(
          {next: true}
        );
    }

    handleBack = () => {
        this.setState(
            {back: true}
          );
    }

    handleHint = () => {
        this.setState(
            {hint: true}
          );
    }

    render(){
        if(this.state.hint) {
            return(
                <Router>
                    <Route path='/Personal_Information_Hint' render={(props) => <Personal_Information_Hint {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Personal_Information_Hint' state/>
                </Router>
            ); 
        } else if(this.state.back) {
            return(
                <Router>
                  <Route path='/App' component={ App } />
                  <Redirect to='/App' />
                </Router>
            ); 

        } else if(this.state.next) {
            return(
                <Router>
                  <Route path='/Medicines' render={(props) => <Medicines {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData } changeArray={this.props.changeArray}/>}/>
                  <Redirect to='/Medicines' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                        <Button basic circular color='yellow' floated='left' icon onClick={ this.handleBack }>
                                <Icon name='angle left'/>
                        </Button>
                        <Button basic circular color='yellow' floated='right' icon onClick={ this.handleHint }>
                                <Icon name='question circle outline'/>
                        </Button>
                        <Header as='h2'>
                            Personal Information
                        </Header>
                        {/* <Divider/> */}
                        <br/>
                        <Form>
                            <Form.Field>
                                {
                                    (this.state.gender === '') ?
                                        <Dropdown focus options={ genderOptions } placeholder='Please Choose... *' onChange={ this.handleGender }/> :
                                        <Dropdown focus options={ genderOptions } text={this.state.gender} placeholder='Please Choose... *' onChange={ this.handleGender }/>
                                }
                            </Form.Field>
                            <Form.Field>
                                {
                                    (this.state.firstName === '') ?
                                        <Input focus fluid placeholder='First Name *' onChange={ this.handleFirstName }/> :
                                        <Input focus fluid placeholder='First Name *' value={this.state.firstName} onChange={this.handleFirstName}/>
                                }
                            </Form.Field>
                            <Form.Field>
                                {
                                    (this.state.lastName === '') ?
                                        <Input focus fluid placeholder='Last Name *' onChange= { this.handleLastName }/> :
                                        <Input focus fluid placeholder='Last Name *' value={this.state.lastName} onChange= { this.handleLastName }/>
                                }
                            </Form.Field>
                            <Form.Field>
                                <DateInput focus name='date' placeholder='Birthdate *'
                                           value={this.state.date} onChange={this.handleChange}/>
                            </Form.Field>
                            <Form.Field>
                                {
                                    (this.state.telephoneNumber === '') ?
                                        <Input focus fluid placeholder='Telephone Number' onChange={ this.handleTelephoneNumber }/> :
                                        <Input focus fluid placeholder='Telephone Number' value={ this.state.telephoneNumber} onChange={ this.handleTelephoneNumber }/>

                                }
                            </Form.Field>
                            <Form.Field>
                                {
                                    (this.state.email === '') ?
                                        <Input focus fluid placeholder='E-Mail' onChange={ this.handleEmail }/> :
                                        <Input focus fluid placeholder='E-Mail' value={this.state.telephoneNumber} onChange={ this.handleEmail }/>
                                }
                            </Form.Field>
                        </Form>
                        <br/>
                        <Button color='black' onClick={ this.handleNext }>NEXT</Button>
                    </Container>
                </div>
            );
        }
    }
}

export default Personal_Information;
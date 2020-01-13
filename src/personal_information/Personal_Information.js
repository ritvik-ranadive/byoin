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
        key: "Herr",
        text: "Herr",
        value: "Herr"
    },
    {
        key: "Frau",
        text: "Frau",
        value: "Frau"
    }
]

class Personal_Information extends Component{

    constructor(props){
        super(props);
        this.state = {
            date: '',
            next: false,
            hint: false,
            back: false,
            gender: "",
            firstName: "",
            lastName: "",
            birthDate: "",
            email: ""
        };
    }

    handleChange = (event, {name, value}) => {
        this.setState(
            {birthDate: value}
        );
    }

    handleGender(event, {value}) {
        this.setState(
            {gender: value}
        );
    }

    handleFirstName(event, {value}) {
        this.setState(
            {firstName: value}
        );
    }

    handleLastName(event, {value}) {
        this.setState(
            {lastName: value}
        );
    }

    handleTelephoneNumber(event, {value}) {
        this.state(
            {telephoneNumber: value}
        );
    }

    handleEmail(event, {value}) {
        this.state(
            {email: value}
        );
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
                  <Route path='/Personal_Information_Hint' component={ Personal_Information_Hint } />
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
                  <Route path='/Medicines' component={ Medicines } />
                  <Redirect to='/Medicines' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                    <Button floated='left' icon onClick={ this.handleBack }>
                            <Icon name='angle left'/>
                    </Button>
                    <Button floated='right' icon onClick={ this.handleHint }>
                            <Icon name='question circle outline'/>
                    </Button>
                    <Header as='h1'>
                        Personal Information 
                    </Header>
                    <Divider/>
                    <Form>
                        <Form.Field>
                            <Dropdown focus options={ genderOptions } placeholder='Please Choose...*' onChange={ this.handleGender }/>
                        </Form.Field>
                        <Form.Field>
                            <Input focus fluid placeholder='First Name*' onChange={ this.handleFirstName }/>
                        </Form.Field>
                        <Form.Field>
                            <Input focus fluid placeholder='Last Name*' onChange= { this.handleLastName }/>
                        </Form.Field>
                        <Form.Field>
                            <DateInput focus name='date' placeholder='Birthdate*' 
                                value={ this.state.date } onChange={this.handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <Input focus fluid placeholder='Telephone Number' onChange={ this.handleTelephoneNumber }/>
                        </Form.Field>
                        <Form.Field>
                            <Input focus fluid placeholder='E-Mail' onChange={ this.handleEmail }/>
                        </Form.Field>
                    </Form>
                    <p></p>
                    <Button color='black' onClick={ this.handleNext }>NEXT</Button>
                    </Container>
                </div>
            )
        }
    }
}

export default Personal_Information;
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, Header, Divider, Form, Input, Button, Container, Icon, Image } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Condition_Hint from './Hint'
import Thanks from '../Thanks'
import Camera_Info from '../camera/Camera_Info'
import logo from '../images/byoin_logo_plus.png'

const bodySite = [
    {
        key: "Arm",
        text: "Arm",
        value: "Arm"
    },
    {
        key: "Leg",
        text: "Leg",
        value: "Leg"
    },
    {
        key: "Torso",
        text: "Torso",
        value: "Torso"
    },
    {
        key: "Back",
        text: "Back",
        value: "Back"
    },
    {
        key: "Face",
        text: "Face",
        value: "Face"
    }
]

class Further_Symptoms extends Component{
    render(){
        return(
            <Form.Field>
                <Input fluid placeholder='Further symptoms'/>
            </Form.Field>
        );
    }
}

class Condition extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            next: false,
            hint: false,
            back: false,
            symptoms: [Further_Symptoms]
        };

        this.add = this.add.bind(this);
    }

    add(){
        const symptoms = this.state.symptoms.concat(Further_Symptoms)
        this.setState({ symptoms });
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

    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
    }

    render(){
        if(this.state.hint) {
            return(
                <Router>
                  <Route path='/Condition_Hint' component={ Condition_Hint } />
                  <Redirect to='/Condition_Hint' />
                </Router>
            ); 
        } else if(this.state.back) {
            return(
                <Router>
                  <Route path='/Camera_Info' component={ Camera_Info } />
                  <Redirect to='/Camera_Info' />
                </Router>
            ); 

        } else if(this.state.next) {
            return(
                <Router>
                  <Route path='/Thanks' component={ Thanks } />
                  <Redirect to='/Thanks' />
                </Router>
            );
        } else {
            const symptoms = this.state.symptoms.map((Element, index) => {
                return <Element key={ index } index={ index } />
            });
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
                        Condition 
                    </Header>
                    <Divider/>
                    <Form>
                        <Form.Group inline>
                            <label>First occurence</label>
                            <Form.Radio label='yes'/>
                            <Form.Radio label='no'/>
                        </Form.Group>
                        <Form.Field>
                            <DateInput focus name='date' placeholder='Since when (approximately)' 
                                value={ this.state.date } onChange={ this.handleChange }/>
                        </Form.Field>
                        <Form.Field>
                            <Input focus fluid placeholder='Description of the condition'/>
                        </Form.Field>
                        <Form.Field>
                            <Dropdown focus options={ bodySite } placeholder='Bodysite'/>
                        </Form.Field>
                        <p></p>
                        { symptoms }
                        <p></p>
                        <Image centered size='tiny' src={ logo } onClick={ this.add } />
                    </Form>
                    <p></p>
                    <Button color='black' onClick={ this.handleNext }>SUBMIT</Button>
                    </Container>
                </div>
            );
        }
    }

}

export default Condition;
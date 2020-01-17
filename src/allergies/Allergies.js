import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Input, Form, Icon, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Medicines from '../medicines/Medicines'
import Allergies_Hint from './Hint'
import Diseases from '../diseases/Diseases'
import logo from '../images/byoin_logo_plus.png'

class Allergy extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.patientData.allergies[this.props.index]
        }
    }

    render(){
        return (
            <Form.Field>
                <Input focus fluid placeholder='Name of Allergy' value={this.state.name} onChange={this.handleName}/>
                <p></p>
            </Form.Field>
        );
    }

    handleName = (event , {value}) => {
        //console.log(value);
        this.setState({
            name: value
        })
        this.props.patientData.allergies[this.props.index] = value;
    }
}

class Allergies extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            allergies: this.props.patientData.allergies,
            next: false,
            hint: false,
            back: false
        }

        this.add = this.add.bind(this);
    }

    add(){
        const allergies = this.state.allergies.concat('');
        this.setState({ allergies });
        this.props.changeInformation('allergies', allergies);
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
        if(this.state.hint){
            return(
                <Router>
                    <Route path='/Allergies_Hint' render={(props) => <Allergies_Hint {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Allergies_Hint' />
                </Router>
            );
        } else if(this.state.back){
            return(
                <Router>
                    <Route path='/Medicines' render={(props) => <Medicines {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Medicines' />
                </Router>
            );
        } else if(this.state.next) {
            return(
                <Router>
                    <Route path='/Diseases' render={(props) => <Diseases {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Diseases' />
                </Router>
            ); 
        } else{
            const allergies = this.state.allergies.map((Element, index) => {
                return <Allergy key={ index } index={ index } patientData={ this.props.patientData} />
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
                    <Header as='h2'>
                        Allergies 
                    </Header>
                    <Divider/>
                    <Form>
                        { allergies }
                        <p></p>
                        <Image centered size='mini' src={ logo } onClick={ this.add } />
                        <p></p>
                        <Button color='black' onClick={ this.handleNext }>NEXT</Button>
                    </Form>
                    </Container>
                </div>
            )
        }
    }
}

export default Allergies;

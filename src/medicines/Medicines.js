import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Input, Form, Icon, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Allergies from '../allergies/Allergies';
import Personal_Information from '../personal_information/Personal_Information'
import Medicines_Hint from './Hint'
import logo from '../images/byoin_logo_plus.png'

class Medicine extends Component{
    render(){
        return (
            <Form.Field>
                <Input fluid placeholder='Name of Medication'/>
            </Form.Field>
        );
    }
}

class Medicines extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            medicines: [Medicine],
            next: false,
            hint: false,
            back: false
        }

        this.add = this.add.bind(this);
    }

    add(){
        const medicines = this.state.medicines.concat(Medicine)
        this.setState({ medicines });
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
                  <Route path='/Medicines_Hint' component={ Medicines_Hint } />
                  <Redirect to='/Medicines_Hint' />
                </Router>
            );
        } else if(this.state.back){
            return(
                <Router>
                  <Route path='/Personal_Information' component={ Personal_Information } />
                  <Redirect to='/Personal_Information' />
                </Router>
            );
        } else if(this.state.next) {
            return(
                <Router>
                  <Route path='/Allergies' component={ Allergies } />
                  <Redirect to='/Allergies' />
                </Router>
            ); 
        } else{
            const medicines = this.state.medicines.map((Element, index) => {
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
                        Current Medication 
                    </Header>
                    <Divider/>
                    <Form>
                        { medicines }
                        <p></p>
                        <Image centered size='tiny' src={ logo } onClick={ this.add } />
                        <p></p>
                        <Button centered color='black' onClick={ this.handleNext }>NEXT</Button>
                    </Form>
                    </Container>
                    
                </div>
            )
        }
    }
}

export default Medicines;

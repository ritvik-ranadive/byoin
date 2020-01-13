import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Input, Form, Icon, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Medicines from '../medicines/Medicines'
import Allergies_Hint from './Hint'
import Diseases from '../diseases/Diseases'
import logo from '../images/byoin_logo_plus.png'

class Allergy extends Component{
    render(){
        return (
            <Form.Field>
                <Input focus fluid placeholder='Name of Allergy'/>
                <p></p>
            </Form.Field>
        );
    }
}

class Allergies extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            allergies: [Allergy],
            next: false,
            hint: false,
            back: false
        }

        this.add = this.add.bind(this);
    }

    add(){
        const allergies = this.state.allergies.concat(Allergy)
        this.setState({ allergies });
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
                  <Route path='/Allergies_Hint' component={ Allergies_Hint } />
                  <Redirect to='/Allergies_Hint' />
                </Router>
            );
        } else if(this.state.back){
            return(
                <Router>
                  <Route path='/Medicines' component={ Medicines } />
                  <Redirect to='/Medicines' />
                </Router>
            );
        } else if(this.state.next) {
            return(
                <Router>
                  <Route path='/Diseases' component={ Diseases } />
                  <Redirect to='/Diseases' />
                </Router>
            ); 
        } else{
            const allergies = this.state.allergies.map((Element, index) => {
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
                        Allergies 
                    </Header>
                    <Divider/>
                    <Form>
                        { allergies }
                        <p></p>
                        <Image centered size='tiny' src={ logo } onClick={ this.add } />
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

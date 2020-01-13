import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Form, Icon, Grid } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Allergies from '../allergies/Allergies'
import Diseases_Hint from './Hint'
import Further_Details from '../further_details/Further_Details'

class Diseases extends Component{
    constructor(props){
        super(props);
        this.state = {
            next: false,
            hint: false,
            back: false
        };
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
                  <Route path='/Diseases_Hint' component={ Diseases_Hint } />
                  <Redirect to='/Diseases_Hint' />
                </Router>
            ); 
        } else if(this.state.back) {
            return(
                <Router>
                  <Route path='/Allergies' component={ Allergies } />
                  <Redirect to='/Allergies' />
                </Router>
            ); 

        } else if(this.state.next) {
            return(
                <Router>
                  <Route path='/Further_Details' component={ Further_Details } />
                  <Redirect to='/Further_Details' />
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
                        Existing/Prior Diseases
                    </Header>
                    <Divider/>
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                Psoriasis
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes"/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no"/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                White Skin Cancer
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes"/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no"/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                Black Skin Cancer
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes"/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no"/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                HIV
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes"/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no"/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                Neurodermatitis
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes"/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no"/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                High Blood Pressure
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes"/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no"/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                Thrombosis
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes"/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no"/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p></p>
                    <Button color='black' onClick={ this.handleNext }>NEXT</Button>
                    </Container>
                </div>
            );
        }
    }
}

export default Diseases;
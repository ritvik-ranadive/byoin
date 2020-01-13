import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Form, Icon, Grid } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Diseases from '../diseases/Diseases'
import Further_Details_Hint from './Hint'
import Camera_Info from '../camera/Camera_Info'

class Further_Details extends Component{
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
                  <Route path='/Further_Details_Hint' component={ Further_Details_Hint } />
                  <Redirect to='/Further_Details_Hint' />
                </Router>
            ); 
        } else if(this.state.back) {
            return(
                <Router>
                  <Route path='/Diseases' component={ Diseases } />
                  <Redirect to='/Diseases' />
                </Router>
            ); 

        } else if(this.state.next) {
            return(
                <Router>
                  <Route path='/Camera_Info' component={ Camera_Info } />
                  <Redirect to='/Camera_Info' />
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
                        Further Details
                    </Header>
                    <Divider/>
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                Smoker
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
                                Alcohol
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
                                Pregnant
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

export default Further_Details;
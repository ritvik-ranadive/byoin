import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Form, Icon, Grid } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Diseases from '../diseases/Diseases'
import Further_Details_Hint from './Hint'
import Camera_Info from '../camera/Camera_Info'
import Medicines from "../medicines/Medicines";

class Further_Details extends Component{
    constructor(props){
        super(props);
        this.state = {
            next: false,
            hint: false,
            back: false,
            smoker: this.props.patientData.smoker,
            alcohol: this.props.patientData.alcohol,
            pregnant: this.props.patientData.pregnant
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

    handleChange1 = (e , { value }) => {
        this.setState({smoker: value });
        this.props.changeInformation('smoker', value);
    }

    handleChange2 = (e , { value }) => {
        this.setState({alcohol: value });
        this.props.changeInformation('alcohol', value);
    }

    handleChange3 = (e , { value }) => {
        this.setState({pregnant: value });
        this.props.changeInformation('pregnant', value);
    }

    render(){
        if(this.state.hint) {
            return(
                <Router>
                    <Route path='/Further_Details_Hint' render={(props) => <Further_Details_Hint {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Further_Details_Hint' />
                </Router>
            ); 
        } else if(this.state.back) {
            return(
                <Router>
                    <Route path='/Diseases' render={(props) => <Diseases {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Diseases' />
                </Router>
            ); 

        } else if(this.state.next) {
            return(
                <Router>
                    <Route path='/Camera_Info' render={(props) => <Camera_Info {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Camera_Info' />
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
                        Further Details
                    </Header>
                    {/* <Divider/> */}
                    <br/>
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>
                                Smoker
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes" value={true} checked={this.state.smoker} onChange={this.handleChange1}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no" value={false} checked={!this.state.smoker} onChange={this.handleChange1}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>
                                Alcohol
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes" value={true} checked={this.state.alcohol} onChange={this.handleChange2}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no" value={false} checked={!this.state.alcohol} onChange={this.handleChange2}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>
                                Pregnant
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes" value={true} checked={this.state.pregnant} onChange={this.handleChange3}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no" value={false} checked={!this.state.pregnant} onChange={this.handleChange3}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p></p>
                    <br/>
                    <Button color='black' onClick={ this.handleNext }>NEXT</Button>
                    </Container>
                </div>
            );
        }
    }
}

export default Further_Details;
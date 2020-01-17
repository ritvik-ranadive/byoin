import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Form, Icon, Grid } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Allergies from '../allergies/Allergies'
import Diseases_Hint from './Hint'
import Further_Details from '../further_details/Further_Details'
import Medicines from "../medicines/Medicines";

class Diseases extends Component{
    constructor(props){
        super(props);
        this.state = {
            next: false,
            hint: false,
            back: false,
            psoriasis: this.props.patientData.psoriasis,
            whiteSkinCancer: this.props.patientData.whiteSkinCancer,
            blackSkinCancer: this.props.patientData.blackSkinCancer,
            hiv: this.props.patientData.hiv,
            neurodermatitis: this.props.patientData.neurodermatitis,
            highBloodPreasure: this.props.patientData.highBloodPreasure,
            thrombosis: this.props.patientData.thrombosis
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
        this.setState({psoriasis: value });
        //console.log('klick');
        this.props.changeInformation('psoriasis', value);
    }

    handleChange2 = (e , { value }) => {
        this.setState({whiteSkinCancer: value});
        this.props.changeInformation('whiteSkinCancer', value);
    }

    handleChange3 = (e , { value }) => {
        this.setState({blackSkinCancer: value});
        this.props.changeInformation('blackSkinCancer', value);
    }

    handleChange4 = (e , { value }) =>{
        this.setState({hiv: value });
        this.props.changeInformation('hiv', value);
    }

    handleChange5 = (e , { value }) =>{
        this.setState({neurodermatitis: value });
        this.props.changeInformation('neurodermatitis', value);
    }

    handleChange6 = (e , { value }) => {
        this.setState({highBloodPreasure: value });
        this.props.changeInformation('highBloodPreasure', value);
    }

    handleChange7 = (e , { value }) => {
        this.setState({thrombosis: value });
        this.props.changeInformation('thrombosis', value)
    }

    render(){
        if(this.state.hint) {
            return(
                <Router>
                    <Route path='/Diseases_Hint' render={(props) => <Diseases_Hint {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Diseases_Hint' />
                </Router>
            ); 
        } else if(this.state.back) {
            return(
                <Router>
                    <Route path='/Allergies' render={(props) => <Allergies {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Allergies' />
                </Router>
            ); 

        } else if(this.state.next) {
            return(
                <Router>
                    <Route path='/Further_Details' render={(props) => <Further_Details {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Further_Details' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                    <Button basic  circular color='yellow' floated='left' icon onClick={ this.handleBack }>
                            <Icon name='angle left'/>
                    </Button>
                    <Button basic circular color='yellow' floated='right' icon onClick={ this.handleHint }>
                            <Icon name='question circle outline'/>
                    </Button>
                    <Header as='h2'>
                        Prior Diseases
                    </Header>
                    {/* <Divider/> */}
                    <br/>
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>
                                Psoriasis
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes" value={true} checked={this.state.psoriasis} onChange={this.handleChange1}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no" value={false} checked={!this.state.psoriasis} onChange={this.handleChange1}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>
                                White Skin Cancer
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes" value={true} checked={this.state.whiteSkinCancer} onChange={this.handleChange2}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no" value={false} checked={!this.state.whiteSkinCancer} onChange={this.handleChange2}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>
                                Black Skin Cancer
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes" value={true} checked={this.state.blackSkinCancer} onChange={this.handleChange3}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no" value={false} checked={!this.state.blackSkinCancer} onChange={this.handleChange3}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>
                                HIV
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes" value={true} checked={this.state.hiv} onChange={this.handleChange4}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no" value={false} checked={!this.state.hiv} onChange={this.handleChange4}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>
                                Neurodermatitis
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes" value={true} checked={this.state.neurodermatitis} onChange={this.handleChange5}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no" value={false} checked={!this.state.neurodermatitis} onChange={this.handleChange5}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>
                                High Blood Pressure
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes" value={true} checked={this.state.highBloodPreasure} onChange={this.handleChange6}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no" value={false} checked={!this.state.highBloodPreasure} onChange={this.handleChange6}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} textAlign='left'>
                                Thrombosis
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="yes" value={true} checked={this.state.thrombosis} onChange={this.handleChange7}/>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Radio label="no" value={false} checked={!this.state.thrombosis} onChange={this.handleChange7}/>
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

export default Diseases;
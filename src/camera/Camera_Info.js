import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Icon, Grid } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Further_Details from '../further_details/Further_Details'
import Condition from '../condition/Condition'
import Camera_Screen from "./Camera_Screen";

class Camera_Info extends Component{
    constructor(props){
        super(props);
        this.state = {
            take_photo: false,
            skip: false,
            back: false
        };
    }

    handleTakePhoto = () => {
        this.setState(
          {take_photo: true}
        );
    }

    handleBack = () => {
        this.setState(
            {back: true}
          );
    }

    handleSkip = () => {
        this.setState(
            {skip: true}
          );
    }

    render(){
        if(this.state.take_photo) {
            return(
                <Router>
                    <Route path='/Camera' component={ Camera_Screen } />
                    <Redirect to='/Camera' />
                </Router>
            ); 
        } else if(this.state.back) {
            return(
                <Router>
                  <Route path='/Further_Details' component={ Further_Details } />
                  <Redirect to='/Further_Details' />
                </Router>
            ); 

        } else if(this.state.skip) {
            return(
                <Router>
                  <Route path='/Condition' component={ Condition } />
                  <Redirect to='/Condition' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                        <Icon name='camera' size='massive'></Icon>
                        <p></p>
                        <p></p>
                        <p>
                            In order to provide the treating physician with the 
                            best possible information, you can take a picture of 
                            your condition in the next step. This image is later
                            stored in the hospital system as a part of the digital
                            file and can only be viewed by the authorized staff.
                        </p>
                        <p>
                            If your condition is not visible from the outside,
                            is in a hidden location, or you feel uncomfortable taking
                            a picture, you can simply skip this part.
                        </p>
                        <Grid columns='equal'>
                            <Grid.Row>
                            <Grid.Column>
                                <Button color='black' onClick={ this.handleTakePhoto }>TAKE PHOTO</Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button color='black' onClick={ this.handleSkip }>SKIP</Button>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>
            );
        }
    }
}

export default Camera_Info;
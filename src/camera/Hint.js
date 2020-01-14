import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Camera_Screen from "./Camera_Screen";
import Condition from "../condition/Condition";

class Camera_Hint extends Component{

    constructor(props){
        super(props);
        this.state = {
            understood: false
        };
    }

    handleUnderstood = () => {
        this.setState(
            {understood: true}
        );
    }

    render(){
        if(this.state.understood) {
            return(
                <Router>
                    <Route path='/Camera' render={(props) => <Camera_Screen {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                    <Redirect to='/Camera' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                        <p></p>
                        <Header as='h2'>Taking a photo</Header>
                        <p></p>
                        <Container text textAlign='center'>
                            <p>
                                Please make sure that the entire affected area
                                is clearly visible in the picture.
                            </p>
                            <p>
                                If you are satisfied with the photo, click on
                                "NEXT" to proceed with the next step, otherwise
                                click on "RETAKE" to take another photo.
                            </p>
                            <p></p>
                            <Button color='yellow' onClick={ this.handleUnderstood }>UNDERSTOOD</Button>
                        </Container>
                    </Container>
                </div>
            );
        }
    }
}

export default Camera_Hint;
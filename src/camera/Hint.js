import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Camera_Screen from "./Camera_Screen";

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
                    <Route path='/Camera' component={ Camera_Screen } />
                    <Redirect to='/Camera' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                        <p></p>
                        <Header as='h1'>Taking a photo</Header>
                        <p></p>
                        <Container text textAlign='center'>
                            <Header as='h2'>Hint</Header>
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
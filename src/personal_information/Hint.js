import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Personal_Information from './Personal_Information';

class Personal_Information_Hint extends Component{

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
                    <Route path='/Personal_Information' render={(props) => <Personal_Information {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Personal_Information' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                        <p></p>
                        <Header as='h2'>Personal Information</Header>
                        <p></p>
                        <Container textAlign='center'>
                            <p>
                                Please enter your personal information.
                            </p>
                            <p>
                                Fields marked with an asterisk are required to be 
                                filled in, all remaining fields are optional.
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

export default Personal_Information_Hint;
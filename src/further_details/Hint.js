import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Further_Details from './Further_Details';

class Further_Details_Hint extends Component{

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
                  <Route path='/Further_Details' component={ Further_Details } />
                  <Redirect to='/Further_Details' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                        <p></p>
                        <Header as='h1'>Further Details</Header>
                        <p></p>
                        <Container text textAlign='center'>
                            <Header as='h2'>Hint</Header>
                            <p>
                                Please indicate whether the listed properties
                                apply to you.
                            </p>
                            <p>
                                For this purpose simply tick "Yes" or "No"
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

export default Further_Details_Hint;
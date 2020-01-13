import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Medicines from './Medicines';

class Medicines_Hint extends Component{

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
                  <Route path='/Medicines' component={ Medicines } />
                  <Redirect to='/Medicines' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                        <p></p>
                        <Header as='h1'>Current Medication</Header>
                        <p></p>
                        <Container text textAlign='center'>
                            <Header as='h2'>Hint</Header>
                            <p>
                                Please enter the name of your medication/drug.
                            </p>
                            <p>
                                If you are currently taking more than one medication,
                                you can simply add the additional medications using the
                                "+" button.
                            </p>
                            <p>
                                If you are not taking any medication at all,
                                just click on "Next".
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

export default Medicines_Hint;
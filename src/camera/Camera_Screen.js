import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Icon, Grid } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Camera_Hint from "./Hint";
import Condition from "../condition/Condition";
import Camera_Info from "./Camera_Info";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from '../ImagePreview';
import {useState} from 'react';


function CameraField (props) {
    const [dataUri, setDataUri] = useState('');

    function handleTakePhotoAnimationDone (dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
        props.onPhotoTaken();
    }

    const isFullscreen = false;
    return (
        <div>
            {
                (dataUri)
                    ? <ImagePreview dataUri={dataUri}
                                    isFullscreen={isFullscreen}
                    />
                    : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
                              isFullscreen={isFullscreen}
                    />
            }
        </div>
    );
}

class Camera_Screen extends Component{
    constructor(props){
        super(props);
        this.state = {
            next: false,
            hint: false,
            back: false,
            retake: false,
            picture_taken: false
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

    handleRetake = () => {
        this.setState(
            {retake:true}
        )
    }

    handlePhotoTaken = () => {
        this.setState(
            {photo_taken: true}
        )
    }

    render(){
        if(this.state.hint) {
            return(
                <Router>
                    <Route path='/Camera_Hint' component={ Camera_Hint } />
                    <Redirect to='/Camera_Hint' />
                </Router>
            );
        } else if(this.state.retake) {
            return (
                <Router>
                    <Route path='/Camera' component={ Camera_Screen }/>
                    <Redirect to='/Camera'/>
                </Router>
            );
        } else if(this.state.back){
            return (
                <Router>
                    <Route path='/Camera_Info' component={ Camera_Info }/>
                    <Redirect to='/Camera_Info'/>
                </Router>
            );
        } else if(this.state.next) {
            return(
                <Router>
                    <Route path='/Condition' component={ Condition } />
                    <Redirect to='/Condition' />
                </Router>
            );
        } else {

            if(!this.state.photo_taken){
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
                                Please take a photo
                            </Header>
                            <Divider/>
                            <CameraField onPhotoTaken={ this.handlePhotoTaken }/>
                            <p></p>
                            <Grid columns='equal'>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Button color='black' onClick={ this.handleRetake }>RETAKE</Button>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button color='grey'>NEXT</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </div>
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
                                Please take a photo
                            </Header>
                            <Divider/>
                            <CameraField onPhotoTaken={ this.handlePhotoTaken }/>
                            <p></p>
                            <Grid columns='equal'>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Button color='black' onClick={ this.handleRetake }>RETAKE</Button>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button color='black' onClick={ this.handleNext }>NEXT</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </div>
                );
            }
        }
    }
}

export default Camera_Screen;
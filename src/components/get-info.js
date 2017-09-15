import React, { Component } from 'react';
import { Button, Divider, Message, Form, Modal, Icon, Header } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default  class GetInfo extends Component{
    componentDidUpdate(){
        var StateObj = Object.assign({}, this.state);
        if(StateObj.validated != this.props.validated){
            this.setState({validated: this.props.validated})
        }
    }
    constructor(props){
        super(props);
        this.state = {
            modalOpen: true,
            validated: false
        }
    }
    handleClose(){
        this.setState({modalOpen: false});
    }
   
    stopLoading(){
        showLoadingIcon("show-loading",false)
    }
    render(){
        return (
            <div className="ask">
            <Modal
            open={this.state.modalOpen}
            basic
            size='small'
          >
            <Header icon='browser' content="Welcome to CodeMode's Typing Test" />
            <Modal.Content>
              <h3>Test your typing speed, by playing 1 minute or 5 minute random text/stories games. <br/> Be a part of our daily leaderboard to get noticed!</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.handleClose.bind(this)} inverted>
                <Icon name='checkmark' /> Got it
              </Button>
            </Modal.Actions>
          </Modal>
                <Form size="massive">
                    <Form.Group widths='equal'>
                        <Form.Field id="username" onChange={this.props.usernameChange.bind(this)} label='Please enter your name' control='input' placeholder='Your Name' />
                    </Form.Group>
                    
                   <Link to={(this.state.validated)?"/test":"/"}> <Button animated='fade' fluid color='teal' onClick={this.props.submitUsername.bind(this)} id="show-loading">
                        <Button.Content visible>
                            Start Racing
                        </Button.Content>
                        <Button.Content hidden>
                            Start your awesome journey of Typing!
                        </Button.Content>
                    </Button>
                    </Link>
                    <Divider hidden />
                </Form>
                {this.props.error == true ?<Message
                    error
                    header='There was some errors with your username. Please try again.'
                    list={[
                      'You should only include lower case letters in your name.',
                      'Your username cannot contain any special characters like - @ , . / % & $ etc...',
                      "Your username cannot contain any number",
                      "Your username should be atleast 8 characters long!"
                    ]}
                  />: ""}
            </div>
        );
    }
}
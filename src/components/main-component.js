import React, {Component} from 'react'
import {Route, Link, Redirect} from 'react-router-dom';
import Heading from './header.js'
import GetInfo from './get-info.js'
import TypingTest from './typing-test.js';


export default class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            error: false,
            validated: false
        }
    }
    handleUsernameChange(event){
        var StateObj = Object.assign({},this.state);
        StateObj.username = event.target.value;
        if(/^[a-z]+$/.test(document.getElementById('username').value) && StateObj.username.length > 7){
                StateObj.error = false;
                StateObj.validated = true;
                this.setState(StateObj);
        }else{
            StateObj.error = true;
            StateObj.validated = false;
            this.setState(StateObj);
        }
    }
    handleSubmitUsername(){
        if(!this.state.error) {
            showLoadingIcon("show-loading",true);
        }     
    }
    render(){
        return (
            <div>
            <Route path="/" component = {Heading} />
            <Route exact path="/" validated={this.state.validated} render = {(props)=><GetInfo {...props} validated={this.state.validated}  usernameChange={this.handleUsernameChange.bind(this)} submitUsername={this.handleSubmitUsername.bind(this)} error={this.state.error} />} />
            <Route exact path = "/test" render = {(props)=>{ return <TypingTest {...props}/>}}/>
            </div>
        );
    }
}
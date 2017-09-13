import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom';
import Heading from './header.js'
import GetInfo from './get-info.js'
export default class MainComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            error: false
        }
    }
    handleUsernameChange(event){
        this.setState({username : event.target.value})
        if(/^[a-z]+$/.test(document.getElementById('username').value)){
            this.setState({error: false})
        }else{
            this.setState({error: true});
        }
    }
    handleSubmitUsername(){
        if(!this.state.error) {showLoadingIcon("show-loading",true);}
    }
    render(){
        console.log(this.state)
        return (
            <div>
            <Route path="/" component = {Heading} />
            <Route exact path="/" render = {(props)=><GetInfo {...props} usernameChange={this.handleUsernameChange.bind(this)} submitUsername={this.handleSubmitUsername.bind(this)} error={this.state.error} />} />
            </div>
        );
    }
}
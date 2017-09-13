import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom';
import Heading from './header.js'
import GetInfo from './get-info.js'
export default class MainComponent extends Component{
    render(){
        return (
            <div>
            <Route path="/" component = {Heading} />
            <Route exact path="/" component = {GetInfo} />
            </div>
        );
    }
}
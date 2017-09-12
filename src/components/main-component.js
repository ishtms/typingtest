import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';

export default class MainComponent extends Component{
    render(){
        return (
            <Header as='h2'>
                <Icon name='settings' />
                <Header.Content>
                    TypeRacer - CodeMode
                </Header.Content>
            </Header>
        );
    }
}
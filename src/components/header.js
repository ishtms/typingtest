import React, {Component} from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default class Heading extends Component{
    render(){
        return (
            <div className="heading">
                <Header as='h2'>
                    <Icon name='write square' />
                    <Header.Content>
                        TypeRacer - CodeMode
                    </Header.Content>
                </Header> 
            </div>
        );
    }
}
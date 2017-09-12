import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import MainComponent from './components/main-component'


class App extends Component{
    render(){
        return <BrowserRouter><MainComponent/></BrowserRouter>
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))
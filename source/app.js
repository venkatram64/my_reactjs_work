import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jambotron';

export default class App extends React.Component {
    render(){
        return <Jumbotron className="jumbotron jumbotron-fulid text-xs-center" style={{backgroundImage:'url(img/forest-1198698_1280.jpg)',color:'white'}}>
                    <div className="container">
                        <h1>Building React.js User Interfaces</h1>
                        <p>with Bootstrap and SASS.</p>
                        <p><Button className="-primary -sm" href="http://github.com/venkatram64" target="_blank"/></p>
                        <p><Button className="-primary -sm" href="http://github.com/venkatram64" disabled/></p>
                    </div>
                </Jumbotron>;
    }
}
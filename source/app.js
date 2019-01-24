import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jambotron';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {click:0, labels:[]}
    }

    onClick(e){
        //console.log(this);
        let labels = this.state.labels.concat([this.state.click]);
        this.setState({click:this.state.click + 1, labels:labels});
        console.log("Buttons was clicked...", this.state.click);
    }

    render(){
        let buttons = this.state.labels.map((value,i)=>{
            return <Button key={value}>{value}</Button>;
        });
        return <Jumbotron className="jumbotron jumbotron-fulid text-xs-center" style={{backgroundImage:'url(img/forest-1198698_1280.jpg)',color:'white'}} containerFluid={true}>
                    <h1>Building React.js User Interfaces</h1>
                    <p>with Bootstrap and SASS.</p>
                    <p><Button onClick={this.onClick} className="-primary -sm" href="http://github.com/venkatram64" target="_blank">Discover things.</Button></p>
                    <p><Button className="-primary -sm" href="http://github.com/venkatram64" disabled>Discover things.</Button></p>
                    <p><Button onClick={this.onClick}  className="-primary -lg -block" >{this.state.click}</Button></p>
                    <p>{buttons}</p>
                </Jumbotron>;
    }
}
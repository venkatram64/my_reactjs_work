import React from 'react';
import {classify} from './utils';
import Container from './container';

export default class Jumbotron extends React.Component {
    
      render(){
          const CSS_NAME = 'jumbotron';
          const props = Object.assign({}, this.props);
          props.className = classify(CSS_NAME, props.className)
          const containerFluid = props.containerFluid;
          const body = props.className.includes(CSS_NAME + '-fluid')?
              <Container fluid style={{color:'red'}}>{this.props.children}</Container>:this.props.children;
          delete props.containerFluid;

          return <div {...props}>{body}</div>
      }
  }
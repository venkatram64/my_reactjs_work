import React from 'react';

export default class Container extends React.Component {
    
      render(){
          const cls = `container${this.props.fluid ? '-fluid' : ''}`;
          return <div className={cls} style={this.props.style}>
            {this.props.children}
          </div>
      }
  }
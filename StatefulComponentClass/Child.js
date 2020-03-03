import React from 'react'; 
import ReactDOM from 'react-dom'; 

export class Child extends React.Component { 
constructor(props) { 
 super(props); 
}

render() {
  return <h1>Hey, my name is {this.props.name}</h1>;
 }
}
import React, { Component } from 'react';
var request = require('superagent');
request.get('http://bbakku.tk',(e,res,body)=>{
  console.log(e,res)
})

export default class App extends Component {
  render() {
    return (
      <h1>Hello, world.</h1>
    );
  }
}

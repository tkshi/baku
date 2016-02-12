import React, { Component } from 'react';
import Baku from './Baku';
var request = require('superagent');
request.get('http://www.soccermemes.net/images/loading.gif')
const loading_image_url = 'http://www.cuisson.co.uk/templates/cuisson/supersize/slideshow/img/progress.BAK-FOURTH.gif'
const base_url = process.env.URL || 'http://bbakku.tk'
const baku = new Baku()

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          image:'http://cdn.theatlantic.com/assets/media/interactives/2014/06/chicago/tiles/blank.png'
      };
  }
  handleFileSelect = (e)=>{
    this.setState({image:loading_image_url})
    baku.upload(e.target.files[0],(e,res)=>{
      this.setState({image:res.url})
    })
  };

  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <input type='file' onChange={this.handleFileSelect}></input>
        <img src={this.state.image} />
      </div>

    );
  }
}

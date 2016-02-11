import React, { Component } from 'react';
var request = require('superagent');
request.get('http://www.soccermemes.net/images/loading.gif')
const loading_image_url = 'http://www.cuisson.co.uk/templates/cuisson/supersize/slideshow/img/progress.BAK-FOURTH.gif'
const base_url = process.env.URL || 'http://bbakku.tk'

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          image:'http://cdn.theatlantic.com/assets/media/interactives/2014/06/chicago/tiles/blank.png'
      };
  }
  handleFileSelect = (e)=>{
    this.setState({image:loading_image_url})
    var formData = new FormData();
    formData.append('file',e.target.files[0])
    request.post(`${base_url}/image`)
    .send(formData)
    .end((e,res)=>{
      this.setState({image:res.body.url})
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

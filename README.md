# Upload image without server.That's all
![](https://upload.wikimedia.org/wikipedia/ja/f/f9/Sakaiminato_Mizuki_Shigeru_Road_Baku_Statue_1.JPG)

<sup>Baku is a Japanese sacred beast that eat human's dream.It'll finish your nightmare. </sup>

## Install
```
npm i --save ba-ku
```

## Usage
```
import Baku from 'ba-ku';
const baku = new Baku()

baku.upload(FILE,(e,res)=>{
  console.log(res.url)
  //This is hosted file url.
})
```

### In React
```
import React, { Component } from 'react';
import Baku from 'ba-ku';
const baku = new Baku()

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          image:''
      };
  }
  handleFileSelect = (e)=>{
    baku.upload(e.target.files[0],(e,res)=>{
      this.setState({image:res.url})
    })
  };
  render() {
    return (
      <div>
      <input type='file' onChange={this.handleFileSelect}></input>
        <img src={this.state.image} />
    </div>
    );
  }
}

```

## Limit
By default you have *1GB* strage.If you login,you get *10GB* at free.
When it is no longer enough,I provide you production plan.


## Investment
If you know that importance of simple,you'll notice  potential this project.
If you want to deal of investment,
[endotakashi1992@gmail.com](endotakashi1992@gmail.com)

var request = require('superagent');
const base_url = process.env.URL || 'http://bbakku.tk'

export default class Baku  {
  constructor() {
  }
  upload(file,cb) {
    var formData = new FormData();
    formData.append('file',file)
    request.post(`${base_url}/image`)
    .send(formData)
    .end((e,res)=>{
      cb(null,{url:res.body.url})
    })
  }
}

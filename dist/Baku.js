'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = require('superagent');
var base_url = process.env.URL || 'http://bbakku.tk';

var Baku = function () {
  function Baku() {
    _classCallCheck(this, Baku);
  }

  _createClass(Baku, [{
    key: 'upload',
    value: function upload(file, cb) {
      var formData = new FormData();
      formData.append('file', file);
      request.post(base_url + '/image').send(formData).end(function (e, res) {
        cb(null, { url: res.body.url });
      });
    }
  }]);

  return Baku;
}();

exports.default = Baku;


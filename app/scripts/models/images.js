var Backbone = require('backbone');


var ImageModel = Backbone.Model.extend({
  idAttributes: '_id',
  defaults: {
    imageURL: '',
    title: '',
    location: ''
  },
});

var ImageCollection = Backbone.Collection.extend({
  model: ImageModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/D9locales'
});

module.exports = {
  'ImageModel': ImageModel,
  'ImageCollection': ImageCollection
};

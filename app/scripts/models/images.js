var Backbone = require('backbone');

var Image = Backbone.Model.extend({
  defaults: {
    caption: '',
  }
});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/D9locales',
});


module.exports = {
  'Image': Image,
  'ImageCollection': ImageCollection,
};

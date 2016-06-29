//var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');

var models = require('./models/images.js');
var ImageList = require('./components/listing.jsx').ImageList;
var ImageHeader = require('./components/listing.jsx').ImageHeader;
// var ImageForm = require('./components/form.jsx').ImageForm;


var descriptions = new models.ImageCollection();
descriptions.add([
  {'title': 'Edisto Beach', 'location': 'South Carolina', 'imageURL': 'http://www.edistobeach.com/wp-content/uploads/2016/06/DSC01947-1024x616.jpg'},
  {'title': 'Mount Elbert', 'location': 'Colorado', 'imageURL': 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Mt._Elbert.jpg'},
  {'title': 'San Clemente', 'location': 'California', 'imageURL': 'https://images.unsplash.com/photo-1445519190187-d74afcf940b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4305f512d27115c00ad564b53b7b2d66'},
  {'title': 'Gateway Arch', 'location': 'Missouri', 'imageURL': 'https://images.unsplash.com/photo-1424274414501-ce96d567b5c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=cc3938b12e75a24c5f61140992c73a2a'},
  {'title': 'Halema‘uma‘u Volcano', 'location': 'Hawaii', 'imageURL': 'https://images.unsplash.com/photo-1448772917253-74bbbe249b30?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ac2da829a6becaafb99bf10934f79399'}
]);

ReactDOM.render(
  React.createElement(ImageList, {collection: descriptions}),
  document.getElementById('container')
);

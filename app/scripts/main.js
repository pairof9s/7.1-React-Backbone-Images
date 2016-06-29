//var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');

var models = require('./models/images.js');
var ImageList = require('./components/listing.jsx').ImageList;

var descriptions = new models.ImageCollection();
descriptions.add([
  {'title': 'Edisto Beach', 'location': South Carolina, 'imageURL': 'https://unsplash.it/400/250/?random'},
  {'title': 'Devils Peak', 'location': Colorado, 'imageURL': 'https://unsplash.it/400/250/?random'},
  {'title': 'San Clemente', 'location': California, 'imageURL': 'https://unsplash.it/400/250/?random'},
  {'title': 'Gateway Arch', 'location': Missouri, 'imageURL': 'https://unsplash.it/400/250/?random'}
])

ReactDOM.render(
  React.createElement(ImageList, {collection: descriptions}),
  document.getElementById('container')
);

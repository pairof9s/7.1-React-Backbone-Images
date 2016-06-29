var React = require('react');


var ImageHeader = React.createClass({
    render: function(){
      return (
        <div className="headbar">
          <a href="{{show}}"><span className="form-icon glyphicon glyphicon-plus-sign" /></a>
        </div>
      )
    },

});

var ImageList = React.createClass({
  componentDidMount: function(){
    this.props.collection.on('update', this.forceUpdate);
  },
  render: function(){

    var descriptionList = this.props.collection.map(function(description){
      return <ImageItem descriptionModel={description} key={description.get('title')} />
    });

    return (
      <div>
        <ImageHeader className="img-responsive" />
        <ul className="descriptions col-sm-offset-2 col-xs-12 col-sm-8">
          {descriptionList}
        </ul>
      </div>
    )
  },
});

var ImageItem = React.createClass({
  render: function(){
    return (
      <div>
        <li className="image-list">
          <div id="list-pic">
            <img src={this.props.descriptionModel.get('imageURL')} /></div>
          <div id="caption">{this.props.descriptionModel.get('title')} :: {this.props.descriptionModel.get('location')}</div>
        </li>
      </div>
    )
  },
});

module.exports = {
  'ImageHeader': ImageHeader,
  'ImageItem': ImageItem,
  'ImageList': ImageList
};

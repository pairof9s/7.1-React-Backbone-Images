var ImageItem = React.createClass({
  render: function(){
    return (
      <li>
        {this.props.descriptionModel.get('title')}:: {this.props.descriptionModel.image()}
      </li>
    )
  },
});

var ImageList = React.createClass({
  componentDidMount: function(){
    this.props.collection.on('update', this.forceUpdate);
  },
  render: function(){

    var imageList = this.props.collection.map(function(description){
      return <ImageItem model={description} key={description.get('title')} />
    });

    return (
      <ul className="descriptions">
        {imageList}
      </ul>
    )
  },
});

module.exports = {
  'ImageList': ImageList
};

var React = require('react');


var ImageHeader = React.createClass({
    // toggleForm: function(event){
    //   this.setState({'ImageForm': !this.state.ImageForm});
    // },
    render: function(){
      return (
        <nav className="headbar">
          <button onClick={this.props.handleFormToggle} className="form-icon"><i className="glyphicon glyphicon-plus-sign"/></button>
        </nav>
      );
    }
});

var ImageForm = React.createClass({
  getInitialState: function(){
    return {
      'imageURL': '',
      'title': '',
      'location': ''
    };
  },
  componentWillReceiveProps: function(newProps){
    console.log(this.props);
    console.log(newProps);
  },
  getDefaultProps: function(){
    return {
      'toggleForm': false
    }
  },
  handleUrlChange: function(e){
    this.setState({'imageURL': e.target.value});
  },
  handleTitleChange: function(e){
    this.setState({'title': e.target.value});
  },
  handleLocaleChange: function(e){
    this.setState({'location': e.target.value});
  },
  handleNewImage: function(e){
    e.preventDefault();
    console.log(this.props.collection);
    this.props.collection.create({
      'imageURL': this.state.imageURL,
      'title': this.state.title,
      'location': this.state.location
    });
  },
  render: function(){
    if(!this.props.toggleForm){
      return <div />
    }
      return (
        <div>
          <form onSubmit={this.handleNewImage} className="form-space">
            <div className="form-field col-xs-offset-1 col-sm-offset-2 col-xs-10 col-sm-8">
            <input onChange={this.handleUrlChange} type="text" name="picUrl" placeholder="Image URL" />
            </div>
            <div className="form-field col-xs-offset-1 col-sm-offset-2 col-xs-10 col-sm-8">
            <input onChange={this.handleTitleChange} type="text" name="picTitle" placeholder="Image Title" ></input>
            </div>
            <div className="form-field col-xs-offset-1 col-sm-offset-2 col-xs-10 col-sm-8">
            <input onChange={this.handleLocaleChange} type="text" name="picLocation" placeholder="Image Location" ></input>
            </div>
            <button class='btn btn-md btn-default button' id="can-img"><a onClick={toggleForm}>CANCEL</a></button>
            <input type='submit' class='btn btn-md btn-success button' id="sub-img"><span id="glyphicon glyphicon-picture sub-icon" />ADD IMAGE</input>
          </form>
        </div>
      )
    },
});


var ImageList = React.createClass({
  getInitialState: function() {
      return {
        'toggleForm': false
      };
  },
  componentWillount: function(){
    this.props.collection.on('update', this.forceUpdate);
  },
  handleFormToggle: function(e){
  this.setState({'toggleForm': !this.state.toggleForm});
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
  'ImageList': ImageList,
  'ImageForm': ImageForm
};

var React = require('react');


var ImageHeader = React.createClass({
    toggleForm: function(event){
      this.setState({'ImageForm': !this.state.ImageForm});
    },
    render: function(){
      return (
        <div className="headbar">
          <button onClick={this.props.toggleForm} className="form-icon"><span className="glyphicon glyphicon-plus-sign" /></button>
        </div>
      )
    },
});

var ImageForm = React.createClass({
    getInitialState: function() {
        return {
          'imageURL': '',
          'title': '',
          'location': '',
          'toggleForm': false
        };
    },
    onClick: function() {
        this.setState({'toggleForm': true});
    },
    onSubmit: function(event){
      event.preventDefault();
      this.props.images.create({
        'imageURL': this.state.picUrl,
        'title': this.state.picTitle,
        'location': this.state.picLocation
      });
    },
    render: function(){
      if(!this.props.toggleForm){
        return <div />
      }
      return (
        <div>
          <form className="form-space">
            <div className="form-field col-xs-offset-1 col-sm-offset-2 col-xs-10 col-sm-8">
            <input type="text" name="picUrl" placeholder="Image URL" />
            </div>
            <div className="form-field col-xs-offset-1 col-sm-offset-2 col-xs-10 col-sm-8">
            <input type="text" name="picTitle" placeholder="Image Title" ></input>
            </div>
            <div className="form-field col-xs-offset-1 col-sm-offset-2 col-xs-10 col-sm-8">
            <input type="text" name="picLocation" placeholder="Image Location" ></input>
            </div>
            <button class='btn btn-md btn-default button' id="can-img"><a onClick={toggleForm}>CANCEL</a></button>
            <button type='submit' class='btn btn-md btn-success button' id="sub-img"><span id="glyphicon glyphicon-picture sub-icon" />ADD IMAGE{ this.state.submitForm ? <Entry /> : null }</button>
          </form>
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
  'ImageList': ImageList,
  'ImageForm': ImageForm
};

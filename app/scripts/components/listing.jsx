var React = require('react');


var ImageHeader = React.createClass({
    render: function(){

      return (
        <div className="headbar">
          <button onClick={this.ImageForm} className="form-icon"><span className="glyphicon glyphicon-plus-sign" /></button>
        </div>
      )
    },

});

var ImageForm = React.createClass({
    getInitialState: function() {
        return {
          'submitForm': false
        };
    },
    onClick: function() {
        this.setState({'submitForm': true});
    },
    render: function(){
      return (
        <div>
          <form className="form-space">
            <div className="form-field col-xs-offset-1 col-sm-offset-2 col-xs-10 col-sm-8">
            <input type="text" name="pic-url" placeholder="Image URL" />
            </div>
            <div className="form-field col-xs-offset-1 col-sm-offset-2 col-xs-10 col-sm-8">
            <input type="text" name="pic-caption" placeholder="Image Location" ></input>
            </div>
            <button type='cancel' class='btn btn-md btn-default button' id="can-img">CANCEL</button>
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

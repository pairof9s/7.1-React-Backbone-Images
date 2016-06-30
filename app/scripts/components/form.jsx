var React = require('react');

var ImageForm = React.createClass({
    getInitialState: function() {
        return {
          'submitForm': false};
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
            <button type='submit' class='btn btn-md btn-success button' id="sub-img"><span id="glyphicon glyphicon-picture sub-icon" />ADD IMAGE{this.state.submitForm ? <Entry /> : null}</button>
          </form>
        </div>
      )
    },
});

var Entry = React.createClass({
    render: function() {
        return (

        );
    }
});

module.exports = {
  'ImageForm': ImageForm,
  'Entry': Entry
};

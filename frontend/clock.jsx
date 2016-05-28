var React = require('react');

var Clock = React.createClass({
  getInitialState: function() {
    return { time: new Date() }
  },

  componentDidMount: function() {
    this.intervalID = setInterval(function() {
      this.setState({ time: new Date()});
    }.bind(this), 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.intervalID);
  },

  render: function() {
    var timeString = this.state.time.toString();
    return (
      <div>{timeString}</div>
    )
  }
});

module.exports = Clock;

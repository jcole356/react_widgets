var React = require('react'),
    Clock = require('./clock'),
    Weather = require('./weather');

var WeatherClock = React.createClass({
  render: function() {
    return (
      <div>
        <Clock />
        <Weather />
      </div>
    );
  }
});

module.exports = WeatherClock;

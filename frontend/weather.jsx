var React = require('react');
var $ = require('jquery');

var Weather = React.createClass({
  getInitialState: function() {
    return { weather: "Weather not retrieved yet!"};
  },

  fetchWeatherForPosition: function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
              "lat=" + latitude.toString() +
              "&lon=" + longitude.toString() +
              "&appid=645c5d39c7603f17e23fcaffcea1a3c1"

   $.ajax({
     url: url,
     context: document.body,
     success: function(response) {
       var weather = response.weather[0].description;

       this.setState({ weather: weather });
     }.bind(this)
   });
  },

  componentWillMount: function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.fetchWeatherForPosition(position);
    }.bind(this));
  },

  render: function() {
    return (
      <div>Weather: {this.state.weather}</div>
    );
  }
});

module.exports = Weather;

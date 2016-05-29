var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require('./tabs'),
    WeatherClock = require('./weather_clock');

var Widgets = React.createClass({
  render: function () {
    var tabs = [
      {
        title: 'Tab One',
        content: 'Best tab ever'
      },
      {
        title: 'Tab Two',
        content: 'Worst tab ever'
      },
      {
        title: 'Tab Three',
        content: 'The last tab'
      },
    ];

    return(
      <div>
        <Tabs tabs={tabs} />
        <WeatherClock />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});

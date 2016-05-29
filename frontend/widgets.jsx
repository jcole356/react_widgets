var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require('./tabs'),
    Clock = require('./clock'),
    Weather = require('./weather');

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
        <Clock />
        <Weather />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});

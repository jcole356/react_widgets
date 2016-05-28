var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return { selectedTabIndex: 0 };
  },

  setTabToIndex: function(index) {
    this.setState({ selectedTabIndex: index });
  },

  render: function() {
    var tabTitles = this.props.tabs.map(function(tab, index) {
      return (
        <li key={index} onClick={this.setTabToIndex.bind(this, index)}>
          <h1>{tab.title}</h1>
        </li>
      );
    }.bind(this))

    var selectedTabContent = this.props.tabs[this.state.selectedTabIndex].content;

    return (
      <div>
        <ul>{tabTitles}</ul>
        <article>{selectedTabContent}</article>
      </div>
    )
  }
});

module.exports = Tabs;

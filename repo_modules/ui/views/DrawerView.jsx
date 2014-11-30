var ViewComponent = require('ui/viewcomponent');
var Drawer = require('./Drawer');
var View = require('./View');
var TitleBar = require('../components/TitleBar');

// High level view that combines a drawer with a simple view

var DrawerView = ViewComponent('DrawerView', {
  render() {
    var { title, styles, ...props } = this.props;

    return (
      <Drawer {...props}>
        {title && <TitleBar>{title}</TitleBar>}
        <View styles={styles}>
          {this.props.children}
        </View>
      </Drawer>
    );
  }
});

module.exports = DrawerView;
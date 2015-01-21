var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./icon-16.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("http://upload.wikimedia.org/wikipedia/commons/thumb/2/25/KB_United_States_Dvorak.svg/2000px-KB_United_States_Dvorak.svg.png"),
  onHide: handleHide,
  width: 650,
  height: 225
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}





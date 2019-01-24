import * as React from "react";
import Switch from "react-switch";
import classNames from 'classnames';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../core"; 

interface SwitchProperties extends ComponentBaseProperties {
}
interface SwitchState extends ComponentBaseState {
checked:boolean;
isRTL: boolean
}
export class SwitchExample extends ComponentBase<SwitchProperties, SwitchState> {
 
    state = {
         checked: false,
         isRTL:false
         };
 
  handleChange=(checked) =>{
    this.setState({ checked });
  }
//   _onDirectionChange = () => {
//     I18nManager.forceRTL(!this.state.isRTL);
//     this.setState({isRTL: !this.state.isRTL});
//     Alert.alert(
//       'Reload this page',
//       'Please reload this page to change the UI direction! ' +
//         'All examples in this app will be affected. ' +
//         'Check them out to see what they look like in RTL layout.',
//     );
//   };
   
  render() {
    return (
      <label htmlFor="material-switch">
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
      </label>
    );
  }
}
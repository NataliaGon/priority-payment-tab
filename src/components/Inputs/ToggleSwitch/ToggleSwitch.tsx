import * as React from "react";
import Switch from "react-switch";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBase, ComponentBaseSkin } from "../../../core";
import styles from './ToggleSwitch.module.scss';

interface SwitchProperties extends ComponentBaseProperties {
}

export class ToggleSwitch extends ComponentBase<SwitchProperties> {

  state = {
    checked: false,
    isRTL: false
  };

  handleChange = (checked) => {
    this.setState({ checked });
  }

  render() {
    return (
      <label htmlFor="material-switch" className={styles.component} style={{ direction: "ltr", paddingTop: "4px" }}>
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          onColor="#00adee"
          handleDiameter={10}
          uncheckedIcon={false}
          checkedIcon={false}
          height={16}
          width={26}
          className="react-switch"
          id="material-switch"
          activeBoxShadow={"#ffffff"}
        />
      </label>
    );
  }
}

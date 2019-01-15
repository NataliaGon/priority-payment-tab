import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../../core";

import styles from "./WrapPanel.module.scss";

interface WrapPanelProperties extends ComponentBaseProperties {

}

interface WrapPanelState extends ComponentBaseState {

}

export class WrapPanel extends ComponentBase<WrapPanelProperties, WrapPanelState> {
  public render() {

  

    return (
      <div className={styles.component} >{this.props.children}</div>
    );
  }
}

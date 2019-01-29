import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties,  ComponentBase } from "../../../../core";

import styles from "./WrapPanel.module.scss";

interface WrapPanelProperties extends ComponentBaseProperties {

}



export class WrapPanel extends ComponentBase<WrapPanelProperties> {
  public render() {

  

    return (
      <div className={styles.component} >{this.props.children}</div>
    );
  }
}

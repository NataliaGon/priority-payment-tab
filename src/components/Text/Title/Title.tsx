import * as React from "react";
import classNames from 'classnames';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../core";

import styles from "./Title.module.scss";

interface TitleProperties extends ComponentBaseProperties {

}

interface TitleState extends ComponentBaseState {

}

export class Title extends ComponentBase<TitleProperties, TitleState> {



  public render() {
 

    return (
      <h1 className={styles.component}>{this.props.text ? this.props.text : this.props.children}</h1>
    );
  }
}

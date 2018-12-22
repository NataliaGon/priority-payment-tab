import * as React from "react";
import classNames from 'classnames';
import styles from "./Title.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

interface TitleProperties extends ComponentBaseProperties {
}

interface TitleState extends ComponentBaseState {

}

export default class Title extends ComponentBase<TitleProperties, TitleState> {
  public render() {
    const componentClasses = classNames(styles.component, this.props.componentClasses);

    return (
      <h1 className={componentClasses}>{this.props.text}</h1>
    );
  }
}

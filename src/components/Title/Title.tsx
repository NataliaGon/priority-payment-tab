import * as React from "react";
import classNames from 'classnames';
import styles from "./Title.module.scss";
import SystemColors from '../../constants/systemColors'
import { ComponentBaseProperties } from "../../composition";

interface TitleProperties extends ComponentBaseProperties {
  color?: SystemColors;
  text: string;
}

export default class Title extends React.Component<TitleProperties> {
  public render() {
    const componentClasses = classNames(styles.component, this.props.componentClasses);

    const titleStyle = this.props.color ? {
      color: this.props.color
    } : {};

    return (
      <h1 className={componentClasses} style={titleStyle}>{this.props.text}</h1>
    );
  }
}

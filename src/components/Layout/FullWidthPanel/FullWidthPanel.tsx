import * as React from "react";
import classNames from 'classnames';
import SystemColor from "../../../constants/systemColors";
import styles from "./FullWidthPanel.module.scss";
import { ComponentBaseProperties } from "../../../composition";


interface FullWidthPanelProperties extends ComponentBaseProperties {
  bgColor?: SystemColor;
}

export default class FullWidthPanel extends React.Component<FullWidthPanelProperties, any> {
  public render() {

    let bgColorClass = '';
    if (this.props.bgColor) {
      bgColorClass = styles[this.props.bgColor];
    }

    const componentClasses = classNames(styles.component, this.props.componentClasses, bgColorClass);
    return (
      <div className={componentClasses} >{this.props.children}</div>
    );
  }
}

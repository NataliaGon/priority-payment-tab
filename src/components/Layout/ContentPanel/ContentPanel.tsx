import * as React from "react";
import classNames from 'classnames';
import SystemColor from "../../../constants/systemColors";
import styles from "./ContentPanel.module.scss";
import { ComponentBaseProperties, ComponentBaseState } from "../../../composition";

interface ContentPanelProperties extends ComponentBaseProperties {
  bgColor?: SystemColor;
  draggable?: boolean;
  closable?: boolean;
  columns?: number;
  active?: boolean;
}

export default class ContentPanel extends React.Component<ContentPanelProperties, any> {
  public render() {
    const componentClasses = classNames(styles.component, this.props.componentClasses);
    return (
      <div className={componentClasses}>{this.props.children}</div>
    );
  }
}

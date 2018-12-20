import * as React from "react";
import classNames from 'classnames';
import styles from "./ContentPanel.module.scss";
import { ComponentBaseProperties, ComponentBaseState } from "../../../composition";

interface ContentPanelProperties extends ComponentBaseProperties {
  skin?: string;
  columns?: number;
}

export default class ContentPanel extends React.Component<ContentPanelProperties, any> {
  public render() {
    const componentClasses = classNames(styles.component, this.props.componentClasses, this.props.skin);
    return (
      <div className={componentClasses}>{this.props.children}</div>
    );
  }
}

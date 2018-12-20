import * as React from "react";
import classNames from 'classnames';
import styles from "./FullWidthPanel.module.scss";
import { ComponentBaseProperties } from "../../../composition";


interface FullWidthPanelProperties extends ComponentBaseProperties {
  skin?: string;
}

export default class FullWidthPanel extends React.Component<FullWidthPanelProperties, any> {
  public render() {

    const componentClasses = classNames(styles.component, this.props.componentClasses, this.props.skin);
    return (
      <div className={componentClasses} >{this.props.children}</div>
    );
  }
}

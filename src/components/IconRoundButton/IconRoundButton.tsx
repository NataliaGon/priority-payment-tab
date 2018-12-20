import * as React from "react";
import classNames from 'classnames';
import styles from "./IconRoundButton.module.scss";
import { ComponentBaseProperties, ComponentBase } from "../../composition";

interface IconRoundButtonProperties extends ComponentBaseProperties {
  skin?: string;
}

export default class IconRoundButton extends ComponentBase<IconRoundButtonProperties, any> {
  public render() {
    const elementClasses = classNames(styles.component, this.props.componentClasses, this.props.skin)
    return (
      <div className={styles.componentWrapper}>
        <div className={elementClasses}></div>
      </div>
    );
  }
}

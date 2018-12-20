import * as React from "react";
import classNames from 'classnames';
import styles from "./Tag.module.scss";
import { ComponentBaseProperties, ComponentBase } from "../../composition";

interface TagProperties extends ComponentBaseProperties {
  skin?: string;
}

export class Label extends ComponentBase<TagProperties, any> {
  public render() {

    const elementClasses = classNames(styles.component, this.props.skin);

    return (
      <div className={elementClasses}>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

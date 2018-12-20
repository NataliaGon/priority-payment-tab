import * as React from "react";
import classNames from 'classnames';
import styles from "./LabelWithIcon.module.scss";
import { ComponentBaseProperties, ComponentBase } from "../../composition";

interface LabelWithIconProperties extends ComponentBaseProperties {
  skin?: string;
  iconClassName?: string;
  badgeCounter?: number;
  textHref?: string;
}

export class LabelWithIcon extends ComponentBase<LabelWithIconProperties, any> {
  public render() {

    const elementClasses = classNames(styles.component, this.props.componentClasses, this.props.skin);
    const iconElementClasses = classNames(styles.iconElement, this.props.iconClassName, '.iconElement');

    return (
      <div className={elementClasses}>
        <div className={iconElementClasses}></div>
        {this.props.textHref ? <a href={this.props.textHref}>{this.props.text}</a> : <div>{this.props.text}</div>}
      </div>
    );
  }
}

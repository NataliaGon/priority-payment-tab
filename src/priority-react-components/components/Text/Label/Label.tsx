import * as React from "react";
import classNames from 'classnames';
import styles from "./Label.module.scss";
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../../base-classes";

interface LabelProperties extends ComponentBaseProperties {
  textHref?: string;
}

interface LabelState extends ComponentBaseState {

}

export default class Label extends ComponentBase<LabelProperties, LabelState> {
  public render() {
    const elementClasses = classNames(styles.component, this.props.componentClasses, this.props.skin);

    return (
      <div className={elementClasses}>
        {this.props.textHref ? <span className={elementClasses}>{this.props.text}</span> : <a className={elementClasses} href={this.props.textHref}>{this.props.text}</a>}
      </div>
    );
  }
}

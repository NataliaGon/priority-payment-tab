import * as React from "react";
import classNames from 'classnames';
import styles from "./Title.module.scss";
import { ComponentBaseProperties } from "../../composition";

interface TitleProperties extends ComponentBaseProperties {
  skin?: string;
}

export default class Title extends React.Component<TitleProperties> {
  public render() {
    const componentClasses = classNames(styles.component, this.props.componentClasses, this.props.skin);

    return (
      <h1 className={componentClasses}>{this.props.text}</h1>
    );
  }
}

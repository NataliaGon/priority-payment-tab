import classNames from 'classnames/bind';
import * as React from "react";
import { ComponentBaseProperties } from "../../../core";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

type TitleSkin = 'h1' | 'h2' | 'h4';

interface TitleProperties extends ComponentBaseProperties {
  skin?: TitleSkin,
  darkContainer?: boolean,
  children?: any
}

export function Title(props: TitleProperties) {

  const titleClass = cx(
    styles.component,
    props.textColor,
    props.componentClasses,
    props.skin + '-styles',
    props.darkContainer && [styles.darkContainer]);

  const content = props.text ? props.text : props.children;

  switch (props.skin) {
    case 'h1':
      return <h1 className={ titleClass }>{ content }</h1>
    case 'h2':
      return <h2 className={ titleClass }>{ content }</h2>
    case 'h4':
      return <h4 className={ titleClass }>{ content }</h4>
    default:
      return <h6 className={ titleClass }>{ content }</h6>
  }
}

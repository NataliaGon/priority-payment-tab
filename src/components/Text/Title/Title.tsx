import * as React from "react";
import classNames from 'classnames/bind';

import { ComponentBaseProperties } from "../../../core";

import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

type TitleVariant = "h1" | "h2" | "h4" | "NavText";

interface TitleProperties extends ComponentBaseProperties {
  variant?: TitleVariant,
  children: any
}


export function Title(props: TitleProperties) {

  const titleClass = cx(props.variant, styles.component, props.componentClasses)

  return (
    <h1 className={ titleClass }>{ props.text ? props.text : props.children }</h1>
  );
}

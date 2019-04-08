import * as React from "react";
import classNames from 'classnames/bind';

import { ComponentBaseProperties} from "../../../core";

import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

interface TitleProperties extends ComponentBaseProperties {
children:any;
}


export function Title(props:TitleProperties) {

   const titleClass = cx(styles.component, props.componentClasses)
    return (
      <h1 className={titleClass}>{props.text ? props.text : props.children}</h1>
    );
  }

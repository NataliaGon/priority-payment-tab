import * as React from "react";
import classNames from 'classnames/bind';
import { ComponentBaseProperties } from "../../../core";
import styles from "./Title.module.scss";

const cx = classNames.bind(styles);

type TitleTag = 'h1-blue' |'h1-grey'| 'h2-blue'|'h2-grey' | 'h4';

// type TitleBackground = 'white-bg'| 'blue-bg';

interface TitleProperties extends ComponentBaseProperties {
  skin?: TitleTag,
  children?: any,
  
  // background?: TitleBackground
}


export function Title(props: TitleProperties) {

  const titleClass = cx(styles.component, props.skin)
  return (
    <h1 className={ titleClass }>{ props.text ? props.text : props.children }</h1>
  );
}

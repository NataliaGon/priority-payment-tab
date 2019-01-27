import * as React from "react";


import { ComponentBaseProperties} from "../../../core";

import styles from "./Title.module.scss";

interface TitleProperties extends ComponentBaseProperties {
children:any;
}


export function Title(props:TitleProperties) {
    return (
      <h1 className={styles.component}>{props.text ? props.text : props.children}</h1>
    );
  }

import * as React from "react";
import classNames from "classnames";
import Icon from "../../Icon";
import styles from "./InputAutofill.module.scss";
import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";

class InputAutoProperties extends ComponentBaseProperties {
    autocomplete?: string;
}

interface InputAutoState extends ComponentBaseState {}

export default class LineInput extends ComponentBase<
  InputAutoProperties,
  InputAutoState
> {
  public render() {
    return (
      <div className={styles.component}>
        <input className={styles.input}  type="email"
        //  autocomplete="on"
         />
      </div>
    );
  }
}

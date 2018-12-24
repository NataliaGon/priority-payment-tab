import * as React from "react";
import classNames from "classnames";
import Icon from "../../Icon";
import styles from "./lineInput.module.scss";
import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";

class LineInputProperties extends ComponentBaseProperties {}

interface LineInputState extends ComponentBaseState {}

export default class LineInput extends ComponentBase<
  LineInputProperties,
  LineInputState
> {
  public render() {
    return (
      <div className={styles.component}>
        <button className={styles.iconDoneWrapper}>
          <Icon textColor="white" fontIconClass="icon-icon-done" />
        </button>
        <Icon fontIconClass="icon-icon-close-small" />
      </div>
    );
  }
}

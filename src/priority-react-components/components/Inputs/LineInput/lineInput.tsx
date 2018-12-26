import * as React from "react";
import Icon from "../../Icon";
import styles from "./lineInput.module.scss";

import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";
import { PriorityIcon } from "../../../base-classes/PriorityIcon";

class LineInputProperties extends ComponentBaseProperties { }

interface LineInputState extends ComponentBaseState { }

export default class LineInput extends ComponentBase<LineInputProperties, LineInputState> {
  public render() {
    return (
      <div className={styles.component}>
        <button className={styles.iconDoneWrapper}>
          <Icon iconColor="white" icon={PriorityIcon.done} />
        </button>
        <Icon icon={PriorityIcon.closeSmall} />
      </div>
    );
  }
}

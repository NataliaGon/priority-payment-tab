import * as React from "react";
import classNames from "classnames";
import Icon from "../../Icon";
import styles from "./lineInput.module.scss";
import Label from "../../Text/Label";

import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";
import { PriorityIcon } from "../../../base-classes/PriorityIcon";

class LineInputProperties extends ComponentBaseProperties {}

interface LineInputState extends ComponentBaseState {
  showInput: boolean;
}

export default class LineInput extends ComponentBase<
  LineInputProperties,
  LineInputState
> {
  constructor(properties: LineInputProperties, state: LineInputState) {
    super(properties, state);

    this.state = {
      showInput: false
    };
  }
  SpanInpitToggle = () => {
    this.setState({ showInput: !(this.state && this.state.showInput) });
  };
  public render() {
    let SpanClasses;

    let inputClasses;

    if (this.state.showInput) {
      SpanClasses = classNames(styles.span, styles.displayNone);
      inputClasses = classNames(styles.input, styles.displayBlock);
    } else {
      SpanClasses = classNames(styles.span);
      inputClasses = classNames(styles.input);
    }

    return (
      <div className={styles.component}>
        <input
          type="text"
          defaultValue="New Search"
          onBlur={this.SpanInpitToggle.bind(this)}
          className={inputClasses}
        />
        <span className={SpanClasses} onClick={this.SpanInpitToggle.bind(this)}>
          New Search
        </span>
        <button className={styles.iconDoneWrapper}>
          <Icon iconColor="white" icon={PriorityIcon.done} />
        </button>
        <Icon icon={PriorityIcon.closeSmall} />
      </div>
    );
  }
}

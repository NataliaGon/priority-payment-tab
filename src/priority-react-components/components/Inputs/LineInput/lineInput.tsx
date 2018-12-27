import * as React from "react";
import Icon from "../../Icon";
import styles from "./lineInput.module.scss";


import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";
import { PriorityIcon } from "../../../base-classes/PriorityIcon";

class LineInputProperties extends ComponentBaseProperties {
  value?:string
}

interface LineInputState extends ComponentBaseState {
  onChange?: (e: any) => void;
  value?:string;
}

export default class LineInput extends ComponentBase<
  LineInputProperties,
  LineInputState
> {
  constructor(properties: LineInputProperties, state: LineInputState) {
    super(properties, state);
    this.state = {
      value:''
  }

}

handleInputChange=(e: { target: { value: any; }; })=>{
if (e.target.value){
  this.setState({value:e.target.value})
}
}
  public render() {
    console.log(this.state.value);
    console.log(this.props.value);
    return (
      <div className={styles.component}>
        <input
          type="text"
          defaultValue={this.props.value}
          onChange={this.handleInputChange}
          className={styles.input}
          autoFocus={true}
        />
        <button className={styles.iconDoneWrapper}>
          <Icon iconColor="white" icon={PriorityIcon.done} />
        </button>
        <Icon icon={PriorityIcon.closeSmall} />
      </div>
    );
  }
}

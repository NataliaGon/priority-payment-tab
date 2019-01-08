import * as React from "react";
import classNames from "classnames";

import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase, PriorityIcon
} from "../../../core";
import {Icon} from "../../Icon/Icon"
import styles from "./InputAutofill.module.scss";
import {CheckBox} from "../CheckBox/CheckBox"

class InputAutoProperties extends ComponentBaseProperties {

}

interface InputAutoState extends ComponentBaseState {
  value?: any;
}

export class AutoFill extends ComponentBase<InputAutoProperties, InputAutoState> {

  state: InputAutoState = {
    value: "bar"
  }

  public render() {
    const Autocomplete = require("react-autocomplete") as any;

    const menuStyle: any = {
      borderRadius: '3px',
      background: 'rgba(255, 255, 255)',
      padding: '44px 5px 5px',
      fontSize: '90%',
      overflow: 'auto',
      height: 'auto',
      position: 'absolute',
      left: '-5px',
      top: '-5px',
      zIndex: '5',
      boxSizing: 'content-box',
      boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.2)'
    }

    return (
      <div className={styles.component}>
        <Autocomplete
          className={styles.inputComponent}

          items={[
            { id: 'foo', label: 'foo' },
            { id: 'bar', label: 'bar' },
            { id: 'baz', label: 'baz' },
            { id: 'fo', label: 'fo' },
            { id: 'br', label: 'ba' },
            { id: 'bz', label: 'ba' },
          ]}

          shouldItemRender={(item: any, value: any) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={(item: any) => item.label}
          onMenuVisibilityChange={() =>
            console.log('hello')
          }

          renderItem={(item: any, highlighted: any) =>
            <div key={item.id} style={{ backgroundColor: highlighted ? 'transparent' : 'transparent' }}>
              <CheckBox />&nbsp;
              {item.label}
              
              <br></br>
            </div>
          }

          renderMenu={(items: any) =>
            <div style={menuStyle} children={items} />
          }

          value={this.state.value}
          onChange={(e: any) => this.setState({ value: e.target.value })}
          onSelect={(value: any) => this.setState({ value })}
        />
        <div className={styles.iconClose}>
        <Icon icon={PriorityIcon.closeSmall} textSize="large" />
        </div>
      </div>
    );
  }
}

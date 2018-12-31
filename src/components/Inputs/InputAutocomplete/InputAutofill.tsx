import * as React from "react";
import classNames from "classnames";

import styles from "./InputAutofill.module.scss";
import Autocomplete from "react-autocomplete";
import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";

class InputAutoProperties extends ComponentBaseProperties {
    autocomplete?: string;
}

interface InputAutoState extends ComponentBaseState {}

export  class AutoFill extends ComponentBase<
  InputAutoProperties,
  InputAutoState
> {
  public render() {
    const Autocomplete = require("react-autocomplete") as any;
    let value=require("react-autocomplete") as any;
    return (
      <div className={styles.component}>
         <Autocomplete
         getItemValue={(item) => item.label}
         items={[
           { label: 'apple' },
           { label: 'banana' },
           { label: 'pear' }
         ]}
         renderItem={(item, isHighlighted) =>
           <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
             {item.label}
           </div>
         }
         value={value}
         onChange={(e) => value = e.target.value}
         onSelect={(val) => value = val}
         /> 
        
      </div>
    );
  }
}

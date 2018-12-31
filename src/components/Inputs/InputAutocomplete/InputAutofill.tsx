import * as React from "react";
import classNames from "classnames";

import styles from "./InputAutofill.module.scss";
import ReactAutocomplete from "react-autocomplete";
import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";

class InputAutoProperties extends ComponentBaseProperties {
  
}

interface InputAutoState extends ComponentBaseState {
  value?:string;
}

export  class AutoFill extends ComponentBase<
  InputAutoProperties,
  InputAutoState
> {
  public render() {
    const Autocomplete = require("react-autocomplete") as any;
  


      this.state = {
        value: '',
      }
    

    return (
      <div className={styles.component}>
         <ReactAutocomplete
        items={[
          { id: 'foo', label: 'foo' },
          { id: 'bar', label: 'bar' },
          { id: 'baz', label: 'baz' },
        ]}
        shouldItemRender={(item:any, value:any) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={(item:any) => item.label}
        renderItem={(item:any, highlighted:any) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.label}
          </div>
        }
        // renderInput={

        // }
        value={this.state.value}
        onChange={(e:any) => this.setState({ value: e.target.value })}
        onSelect={(value:any) => this.setState({ value })}
        /> 
      </div>
    );
  }
}

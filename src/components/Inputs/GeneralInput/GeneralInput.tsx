import * as React from "react";
import classNames from "classnames";

import styles from "./GeneralInput.module.scss";

import {
  ComponentBaseProperties,
  ComponentBaseState,
  ComponentBase
} from "../../../base-classes";

class GeneralInputProperties extends ComponentBaseProperties {

}

interface GeneralInputState extends ComponentBaseState {
  
}

export class GeneralInput extends ComponentBase<
GeneralInputProperties,
GeneralInputState
  > {
      public render(){
          return(
          <div>
              <input type="text"/>

          </div>)
      }

  }
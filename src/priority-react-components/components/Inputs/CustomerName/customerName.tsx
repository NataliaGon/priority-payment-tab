import * as React from "react";

import classNames from "classnames";
// import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../base-classes";
import Icon from '../../Icon';
import "./customerName.scss";

// type customerNameSkin = ComponentBaseSkin | "Stroke" | "RoundStrokeIcon";

// class customerNameProperties extends ComponentBaseProperties {

// }

// interface customerNameState extends ComponentBaseState {

// }

export default class customerName extends React.Component {
  public render() {
    return (
      <div className="container-for-drop-down">
        <span className="drop-down-title">Customer name</span>
        <div className="drop-down-inputs">
          <div className="input-small">
          <div className="drop-down_icon-wrapper">
          <Icon fontIconClass="icon-icon-arrow_drop_down"/></div>
          </div>
          <div className="options-wrapper">
            <span className="options-to-choose">Volvo</span>
            <span className="options-to-choose">Saab</span>
            <span className="options-to-choose">Mercedes</span>
            <span className="options-to-choose">Audi</span>
          </div>
          <select className="input-big"/>
        </div>
        <div className="drop-down-resalts-container">
          <span className="drop-down-resalt">Stormie Hansford</span>
        </div>
      </div>
    );
  }
}

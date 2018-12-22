import * as React from "react";

// import classNames from "classnames";
// import { ComponentBaseProperties, ComponentBaseState, ComponentBase, ComponentBaseSkin } from "../../../base-classes";
import Icon from "../../Icon";
import "./customerName.scss";

// type customerNameSkin = ComponentBaseSkin | "Stroke" | "RoundStrokeIcon";

// class customerNameProperties extends ComponentBaseProperties {

// }

// interface customerNameState extends ComponentBaseState {

// }

export default class customerName extends React.Component {
  state = {
    isOpen: false,

  };
  DropDownToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  renderOption=()=>{
    const optionsArray=['Volvo', 'Saab', 'Mercedes', 'Audi']
    if (optionsArray.length) {
      return (
        <ul className="songs-container">
          {optionsArray.map(option=> (
            <li className="options-to-choose" onClick={this.optionChoosed}>
           {option}
            </li>
            // <Song key={option.id}/>
          ))}
        </ul>
      );
    }
  }
  optionChoosed=()=>{

  }
  public render() {
    let classForDropDownIcon;
    
    if (this.state.isOpen) {
      classForDropDownIcon = "icon-icon-arrow_drop_up";
    } else {
      classForDropDownIcon = "icon-icon-arrow_drop_down";
    }
    const dropDownOptionsClass = "options-wrapper " + (this.state.isOpen ? "box-shadow" : "drop-down-hide");

    return (
      <div className="container-for-drop-down">
        <span className="drop-down-title">Customer name</span>
        <div className="drop-down-inputs">
          <div className="input-small" onClick={this.DropDownToggle}>
            <div className="drop-down_icon-wrapper">
              <Icon fontIconClass={classForDropDownIcon} />
            </div>
          </div>
          <div className={dropDownOptionsClass}>
            {this.renderOption()}
          </div>
          <select className="input-big" />
        </div>
        <div className="drop-down-resalts-container">
          <span className="drop-down-resalt">Stormie Hansford</span>
        </div>
      </div>
    );
  }
}

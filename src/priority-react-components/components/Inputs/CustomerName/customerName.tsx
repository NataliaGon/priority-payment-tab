import * as React from "react";
import Icon from "../../Icon";
import "./customerName.scss";

export default class customerName extends React.Component {
  state = {
    isOpen: false,
    resalts: ["test"]
  };

  DropDownToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderOption = () => {
    const optionsArray = [
      { name: "Volvo" },
      { name: "Saab" },
      { name: "Mercedes" },
      { name: "Audi" }
    ];

    // const classForOption = "options-wrapper " + (this.state.isOpen ? "box-shadow" : "drop-down-hide");
    if (optionsArray.length) {
      return (
        <ul className="songs-container">
          {optionsArray.map(option => (
            <li
              key={option.name}
              className="options-to-choose"
              onClick={e => this.optionChoosed()}
            >
              {option.name}
            </li>
          ))}
        </ul>
      );
    }
  };
  renderResalts = () => {
    if (this.state.resalts.length) {
      return (
        <ul>
          {this.state.resalts.map(resalt => (
            <li key={resalt} className="drop-down-resalt">
              {resalt}
            </li>
          ))}
        </ul>
      );
    }
  };

  optionChoosed() {
    // console.log(e);
    this.DropDownToggle();
  }
  public render() {
    let classForDropDownIcon;

    if (this.state.isOpen) {
      classForDropDownIcon = "icon-icon-arrow_drop_up";
    } else {
      classForDropDownIcon = "icon-icon-arrow_drop_down";
    }
    const dropDownOptionsClass =
      "options-wrapper " +
      (this.state.isOpen ? "box-shadow" : "drop-down-hide");

    return (
      <div className="container-for-drop-down">
        <span className="drop-down-title">Customer name</span>
        <div className="drop-down-inputs">
          <div className="input-small" onClick={this.DropDownToggle}>
            <div className="drop-down_icon-wrapper">
              <Icon fontIconClass={classForDropDownIcon} />
            </div>
          </div>
          <div className={dropDownOptionsClass}>{this.renderOption()}</div>
          <select className="input-big" />
        </div>
        <div className="drop-down-resalts-container">
          {/* <span className="drop-down-resalt">Stormie Hansford</span> */}
          {this.renderResalts()}
        </div>
      </div>
    );
  }
}

import * as React from "react";
import { ComponentBaseProperties,  ComponentBase, PriorityIcon } from "../../../core";
import styles from "./GridContainer.module.scss";


type GridContainerPanelSkin = "default" | "silver" | "light" | "dark" | "snow";


interface GridContainerProperties extends ComponentBaseProperties {
 columnsMobile?:number|object;
 columnsDesktop?:number|object;
 gutterWidth?: number|object;
 mobileBreakpoint?: number|object;
}

export class GridContainer extends ComponentBase<GridContainerProperties> {

  public render() {
    
    return (
        <div></div>
    );
  }
}

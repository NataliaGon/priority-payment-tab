import * as React from "react";
import classNames from 'classnames/bind';
import { ComponentBaseProperties, ComponentBase, PriorityIcon } from "../../core";
import styles from "./GridItem.module.scss";

const cx = classNames.bind(styles);




interface GridItemProperties extends ComponentBaseProperties {
 columns?:any;
 smallR?:boolean;
 smallL?:boolean;
 large?:boolean;
 offset?:any;
 gutterWidthDesktop?:any;
}

export class GridItem extends ComponentBase<GridItemProperties> {
    public render() {
      
        const gridItemClasses = cx(styles.component);
        const gridItemStyle ={
            gridColumn: `${this.props.offset}/${parseInt(this.props.offset)+parseInt(this.props.columns)}`,
            backgroundColor:'#ff0045',
            height:'300px',
            marginRight: this.props.smallR||this.props.large? -parseInt(this.props.gutterWidthDesktop):'',
            marginLeft: this.props.smallL||this.props.large? -parseInt(this.props.gutterWidthDesktop):''
        }
        console.log(gridItemStyle);
        return (
            <React.Fragment>
                <div style={gridItemStyle}>

                </div>  
            </React.Fragment>
        );
    }
}

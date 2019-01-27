import * as React from "react";
import classNames from "classnames";

import {
  ComponentBaseProperties,
  ComponentBase, PriorityIcon
} from "../../../core";
import {Icon} from "../../Icon/Icon"
import styles from "./InputAutocomplete.module.scss";
import {CheckBox} from "../CheckBox/CheckBox";
import {Input} from "../Input/Input";
import { Button } from "../Button/Button";
import { ScrollPanel } from '../../Layout/Panels/ScrollPanel/ScrollPanel';
import { isDeepStrictEqual } from "util";

class InputAutoProperties extends ComponentBaseProperties {
 isMultiselect?:boolean
}



export class AutoFill extends ComponentBase<InputAutoProperties> {

  state = {
    value: "bar"
  }
  isButton(button){
    if(button){
      return(<Button size="small">{button}</Button>)
    }else{
      return null
    }
  }
  // isIcon(icon){
  //   if(icon){
  //     return(<Icon icon={PriorityIcon[icon]}/>)
  //   }else{
  //     return null
  //   }
  // }
  public render() {
    const Autocomplete = require("react-autocomplete") as any;

    const menuStyle: any = {
      //borderRadius: '3px',
      background: 'rgba(255, 255, 255)',
      padding: '44px 5px 5px',
      //fontSize: '90%',
      //overflow: 'auto',
      height: 'auto',
      maxHeight: '200px',
      //position: 'absolute',
      //left: '-5px',
      //top: '-5px',
      //zIndex: '5',
      boxSizing: 'content-box',
      boxShadow: '0 10px 20px 0 rgba(0, 0, 0, 0.2)'
    }
  const checkBox = (this.props.isMultiselect)? <CheckBox />:'';
  
    return (
    
        <Autocomplete
          className={styles.inputComponent}
          //open={true}
          items={[
            { id: 'foo', label: 'foo', btn:'Apply' },
            { id: 'bar', label: 'bar', icon:'done' },
            { id: 'baz', label: 'baz' },
            { id: 'fo', label: 'fo', btn:'Delete', icon:'clear'},
            { id: 'br', label: 'ba' },
            { id: 'bz', label: 'ba' },
          ]}

          shouldItemRender={(item: any, value: any) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={(item: any) => item.label}
          onMenuVisibilityChange={() =>
            console.log('hello')
          }

          renderItem={(item: any, highlighted: any) =>
         
            <div className={styles.item} key={item.id} style={{ backgroundColor: highlighted ? 'lightblue' : 'white' }}>
              {checkBox}
              <span className={styles.itemLabel}>{item.label}</span>
              <span className={styles.itemButton}> {this.isButton(item.btn)}</span>
              <br></br>
            </div>
          }

          renderMenu={(items: any) =>
            <div style={menuStyle}>
        
            {items}
                        </div>
          }

          renderInput={({ref, ...props}) => {
            console.log(props);
            return <Input inputRef={ref} {...props}><Icon icon={PriorityIcon.closeSmall} /></Input>
          }}

          value={this.state.value}
          onChange={(e: any) => this.setState({ value: e.target.value })}
          onSelect={(value: any) => this.setState({ value })}
        />
    );
  }
}

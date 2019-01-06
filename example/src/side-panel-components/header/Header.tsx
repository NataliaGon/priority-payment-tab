import * as React from "react";

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from 'priority-style-react';
import { StackPanel, Container, RowPanel, Label, Input, Select, Icon, Title, Button, LineInput } from 'priority-style-react';

import styles from './Header.module.scss';



class HeaderBlockProperties extends ComponentBaseProperties {

}

interface HeaderBlockState extends ComponentBaseState {
    withInput:boolean
}

export class Header extends ComponentBase<HeaderBlockProperties, HeaderBlockState > {
state:HeaderBlockState ={
    withInput:false
}
ClickHandler=()=>{
  this.setState({withInput:!this.state.withInput});
}

    render() {
        const inputComponent = (this.state.withInput) ? 
        
        <Input skin="line" label="New Search">
        <div style={{display:"flex"}}>
        <button className={styles.iconDoneWrapper} onClick={this.ClickHandler}>
          <Icon iconColor="white" icon={PriorityIcon.done} />
        </button>
        <button onClick={this.ClickHandler}>
        <Icon icon={PriorityIcon.closeSmall} />
        </button>
        </div>
      </Input>
     
      : '';
      
        const labelComponent = (this.state.withInput) ? '' : <Label skin="large">New Search</Label>;

        return (
          <StackPanel skin="light" >
            <div className={styles.componentWrapper}>
              <RowPanel >
                <Title>Advanced Search</Title>
                <Button skin="roundStrokeIcon">
            <Icon iconColor="blue" icon={PriorityIcon.arrowLeftLong} /> </Button>
              </RowPanel>
              <RowPanel >
                <div style={{ display: "flex" }}>
                
                  <Icon icon={PriorityIcon.filterBig} counterValue={5}></Icon>
                 
                  <div onClick={this.ClickHandler}>
                  {labelComponent}
                  </div>
                </div>
                {inputComponent}
                <div style={{ display: "flex" }}>
                  <Icon icon={PriorityIcon.questionCircle} ></Icon>
                  
                  <Label textHref="#">Help</Label>
                 
                </div>
                
              </RowPanel>
            </div>
          </StackPanel>
        )
    }
}

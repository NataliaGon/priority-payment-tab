import * as React from "react";

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from 'priority-style-react';
import { StackPanel, RowPanel, Label, Input, Icon, Title, Button } from 'priority-style-react';

import styles from './Header.module.scss';
import stylesMain from '../../AppStyles.module.scss';


class HeaderBlockProperties extends ComponentBaseProperties {

}

interface HeaderBlockState extends ComponentBaseState {
  withInput: boolean
}

export class Header extends ComponentBase<HeaderBlockProperties, HeaderBlockState> {
  state: HeaderBlockState = {
    withInput: false
  }
  clickHandler = () => {
    this.setState({ withInput: !this.state.withInput });
  }

  render() {
    const inputComponent = (this.state.withInput) ?

      // <Input skin="line" label="New Search">
      //   <div style={{ display: "flex" }}>
      //     <button className={styles.iconDoneWrapper} onClick={this.clickHandler}>
      //       <Icon iconColor="white" icon={PriorityIcon.done} />
      //     </button>
      //     <button onClick={this.clickHandler}>
      //       <Icon icon={PriorityIcon.closeSmall} />
      //     </button>
      //   </div>
      // </Input>

      <Input skin="line" label="חיפוש חדש">
        <div style={{ display: "flex" }}>
          <button className={styles.iconDoneWrapper} onClick={this.clickHandler}>
            <Icon iconColor="white" icon={PriorityIcon.done} />
          </button>
          <button onClick={this.clickHandler} >
            <Icon icon={PriorityIcon.closeSmall} />
          </button>
        </div>
      </Input>

      : '';

    // const labelComponent = (this.state.withInput) ? '' : <Label icon={PriorityIcon.filterBig} iconCounter={5} skin="large">New Search</Label>;
    const labelComponent = (this.state.withInput) ? '' : <Label icon={PriorityIcon.filterBig} iconCounter={5} skin="large">חיפוש חדש</Label>;
    
    return (
      <div className={stylesMain.stackPanel} style={{backgroundColor:"#ebedee", border:"1px solid #e2eaf1"}}>
        <div className={styles.componentWrapper}>
        <div className={stylesMain.rowPanel}>
            {/* <Title>Advanced Search</Title> */}
            <Title>חיפוש מתקדם</Title>
            <Button skin="stroke" shape="round" icon={PriorityIcon.arrowRightLong} />
          </div>
          <div className={stylesMain.rowPanel} >
            <div className={styles.secondRowWrapper} >
              {/* <Icon icon={PriorityIcon.filterBig} counterValue={5}></Icon> */}
              <div onClick={this.clickHandler}>
                {labelComponent}
              </div>
            </div>
            {inputComponent}
            <div style={{ display: "flex" }}>
              {/* <Icon icon={PriorityIcon.questionCircle}></Icon> */}
              <Label icon={PriorityIcon.questionCircle} textHref="#">Help</Label>
            </div>
          </div>
        </div>
  
      </div>
    )
  }
}

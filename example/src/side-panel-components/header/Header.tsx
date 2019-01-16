import * as React from "react";

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from 'priority-style-react';
import { StackPanel, RowPanel, Label, Input, Icon, Title, Button } from 'priority-style-react';

import styles from './Header.module.scss';



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

      <Input skin="line" label="New Search">
        <div style={{ display: "flex" }}>
          <button className={styles.iconDoneWrapper} onClick={this.clickHandler}>
            <Icon iconColor="white" icon={PriorityIcon.done} />
          </button>
          <button onClick={this.clickHandler}>
            <Icon icon={PriorityIcon.closeSmall} />
          </button>
        </div>
      </Input>

      : '';

    const labelComponent = (this.state.withInput) ? '' : <Label icon={PriorityIcon.filterBig} iconCounter={5} size="large">New Search</Label>;

    return (
      <StackPanel skin="light" >
        <div className={styles.componentWrapper}>
          <RowPanel>
            <Title>Advanced Search</Title>
            <Button skin="stroke" shape="round" icon={PriorityIcon.arrowLeftLong} />
          </RowPanel>
          <RowPanel >
            <div style={{ display: "flex" }}>
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

          </RowPanel>
        </div>
      </StackPanel>
    )
  }
}

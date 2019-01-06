import React, { Component } from 'react';

import {
  SidePanel, StackPanel, RowPanel, Container, WrapPanel, ScrollPanel,
  Title, CheckBox, Label, Button, Icon, Tag, LineInput, Select,
  Input, PriorityIcon, AutoFill, DateQueryBlock, FooterBlock, CustomerForm
} from 'priority-style-react';

// import { optionDropDown } from './mock-data/optionDropDown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidePanel>
          <ScrollPanel gradient>
            <StackPanel componentClasses={["header"]} skin="silver">
              <RowPanel paddingBottom={true} paddingTop={true}>
                <Title>Advanced Search</Title>
                <Button skin="roundStrokeIcon"><Icon iconColor="blue" icon={PriorityIcon.arrowLeftLong} /></Button>
              </RowPanel>
              <RowPanel paddingBottom={true} paddingTop={true}>
                <div style={{ display: "flex" }}>
                  <Icon icon={PriorityIcon.filterBig} counterValue={5}></Icon>
                  <Label skin="large">New Search</Label>
                </div>
                <div style={{ display: "flex" }}>
                  <Icon icon={PriorityIcon.questionCircle} ></Icon>
                  <Label textHref="#">Help</Label>
                </div>
              </RowPanel>
            </StackPanel>

            <StackPanel>
              <RowPanel alignItems="space-between" paddingBottom={true} paddingTop={true}>
                <div style={{ display: "flex" }}>
                  <CheckBox />
                  <Label skin="bold">Case Sensitive</Label>
                </div>
                <Label skin="small-bold">Sort table by rearranging filter order with drag and drop</Label>
              </RowPanel>
            </StackPanel>

            <StackPanel skin="light">
              <RowPanel paddingBottom={true} paddingTop={true}>
                <Title>Advanced Search</Title>
                <Button skin="roundStrokeIcon"><Icon iconColor="blue" icon={PriorityIcon.arrowLeftLong} /></Button>
              </RowPanel>
              <RowPanel paddingBottom={true} paddingTop={true}>
                <div style={{ display: "flex" }}>
                  <Icon icon={PriorityIcon.filterBig} counterValue={5}></Icon>
                </div>
                <div style={{ display: "flex" }}>
                  <Icon icon={PriorityIcon.questionCircle} ></Icon>
                  <Label textHref="#">Help</Label>
                </div>
                <LineInput />
              </RowPanel>
            </StackPanel>

            <CustomerForm />

            <DateQueryBlock />

            <FooterBlock />


          </ScrollPanel>
        </SidePanel>
      </div>
    );
  }
}

export default App;

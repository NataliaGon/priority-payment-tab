import React, { Component } from 'react';

import {
  SidePanel, StackPanel, RowPanel, Container, WrapPanel, ScrollPanel,
  Title, CheckBox, Label, Button, Icon, Tag, LineInput, Select,
  Input, PriorityIcon
} from 'priority-style-react';

import { DateQueryBlock, FooterBlock, CustomerForm, Header } from './side-panel-components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SidePanel>
          <ScrollPanel gradient>
            <Header/>

            <StackPanel>
              <RowPanel alignItems="space-between" paddingBottom={true} paddingTop={true}>
                <div style={{ display: "flex" }}>
                  <CheckBox />
                  <Label skin="bold">Case Sensitive</Label>
                </div>
                <Label skin="small-bold">Sort table by rearranging filter order with drag and drop</Label>
              </RowPanel>
            </StackPanel>

            <CustomerForm/>
            <DateQueryBlock/>
            <FooterBlock/>
          </ScrollPanel>
        </SidePanel>
      </div>
    );
  }
}

export default App;

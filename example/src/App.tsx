import React, { Component } from 'react';

import {
  SidePanel, StackPanel, RowPanel,ScrollPanel,
 CheckBox, Label
 
} from 'priority-style-react';

import { DateQueryBlock, FooterBlock, TextQueryBlock, Header } from './side-panel-components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SidePanel>
          <ScrollPanel>
              <Header />

              <StackPanel>
                <RowPanel alignItems="space-between" paddingBottom={true} paddingTop={true}>
                  <div style={{ display: "flex" }}>
                    <CheckBox />
                    <Label skin="bold">Case Sensitive</Label>
                  </div>
                  <Label skin="small-bold">Sort table by rearranging filter order with drag and drop</Label>
                </RowPanel>
              </StackPanel>

              <TextQueryBlock />
              <DateQueryBlock />
             
          </ScrollPanel>
          <FooterBlock />
        </SidePanel>
      </div>
    );
  }
}

export default App;

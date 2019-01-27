import React, { Component } from 'react';

import {
  SidePanel, StackPanel, RowPanel, ScrollPanel,
  CheckBox, Label, Button

} from 'priority-style-react';

import { DateQueryBlock, FooterBlock, TextQueryBlock, Header } from './side-panel-components';
import stylesMain from './AppStyles.module.scss';

class App extends Component {

  panelRef;

  componentDidMount() {
    this.panelRef.open();
  }

  render() {
    return (
      <div className="App">
        <SidePanel ref={p => this.panelRef = p}>
          <ScrollPanel>
            <div>
            <Header withInput />
            <div className={stylesMain.stackPanel}>
            <div className={stylesMain.rowPanel} style={{paddingBottom:"10px", paddingTop:"10px", alignItems:"space-between" }}>
                <div style={{ display: "flex" }}>
                  <CheckBox />
                  <Label skin="regular-hight-contrast">Case Sensitive</Label>
                </div>
                <Label skin="small-bold">Sort table by rearranging filter order with drag and drop</Label>
              </div>
            </div>
            <TextQueryBlock />
            <TextQueryBlock />
            <DateQueryBlock />
            
            </div>
         
          <FooterBlock />
          </ScrollPanel>
        </SidePanel>
      </div>
    );
  }
}

export default App;

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
            <Header />

            <div className={stylesMain.stackPanel}>
            <div className={stylesMain.rowPanel} style={{paddingBottom:"10px", paddingTop:"10px", alignItems:"space-between" }}>
                <div style={{ display: "flex" }}>
                  <CheckBox />
                  <Label size="regular-hight-contrast">Case Sensitive</Label>
                </div>
                <Label size="small-bold">Sort table by rearranging filter order with drag and drop</Label>
              </div>
            </div>

            <TextQueryBlock />
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

import { CheckBox, Label, ScrollPanel, SidePanel } from 'priority-style-react';
import React, { Component } from 'react';

import stylesMain from './AppStyles.module.scss';
import { DateQueryBlock, FooterBlock, Header, TextQueryBlock } from './side-panel-components';

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
                <div className={stylesMain.rowPanel} style={{ paddingBottom: "10px", paddingTop: "10px", alignItems: "space-between" }}>
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

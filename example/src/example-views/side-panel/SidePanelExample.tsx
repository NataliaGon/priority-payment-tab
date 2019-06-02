import { CheckBox, Label, ScrollPanel, SidePanel } from 'priority-style-react';
import React, { Component } from 'react';
import { DateQueryBlock, FooterBlock, Header, TextQueryBlock } from './side-panel-components';

import styles from './SidePanelExample.module.scss';


class SidePanelExample extends Component {

    panelRef;

    componentDidMount() {
        this.panelRef.open();
    }

    render() {
        return (
            <div className="example-content">
                <SidePanel ref={ p => this.panelRef = p }>
                    <ScrollPanel>
                        <div>
                            <Header withInput />
                            <div className={ styles.stackPanel }>
                                <div className={ styles.rowPanel } style={ { paddingBottom: "10px", paddingTop: "10px", alignItems: "space-between" } }>
                                    <div style={ { display: "flex" } }>
                                        <CheckBox />
                                        <Label skin="bold">Case Sensitive</Label>
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

export { SidePanelExample };
export default SidePanelExample;

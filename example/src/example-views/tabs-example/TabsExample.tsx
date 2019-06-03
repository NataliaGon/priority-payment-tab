import React, { ComponentElement } from 'react';
import styles from './TabsExample.module.scss';
import { Tabs, TabPane } from 'priority-style-react';


type PanelContentProperties = {
    id?: Object;
}

const PanelContent: (props: PanelContentProperties) => ComponentElement<PanelContentProperties, any> = (props) => {

    return (
        <div style={{ height: 200, overflow: 'auto' }}>Tabular Data {props.id}</div>
    );
}

const TabsExample: () => ComponentElement<PanelContentProperties, any> = () => {

    return (
        <div className={styles.exampleContent}>
            <h1>Tabs Example</h1>
            <div className={styles.tabsContainer}>
                <Tabs
                    defaultActiveKey="1">
                    <TabPane tab={'My open invoces (3)'} key="1" >
                        <PanelContent id='1' />
                    </TabPane>
                    <TabPane tab={'Payments Made (3)'} key="2" >
                        <PanelContent id='2' />
                    </TabPane>
                </Tabs>
            </div>

            <div id="dir" dir="rtl">
                <h1>Tabs Example RTL</h1>
                <div className={styles.tabsContainer}>
                    <Tabs
                        defaultActiveKey="1"
                    >
                        <TabPane tab={'החשבוניות הפתוחות שלי (3)'} key="0" >
                            <PanelContent id='1' />
                        </TabPane>
                        <TabPane tab={'תשלומים שבוצעו (3)'} key="1" >
                            <PanelContent id='2' />
                        </TabPane>
                    </Tabs>
                </div>
            </div>

        </div>
    );
}

export { TabsExample };
export default TabsExample;

// const dir = document.getElementById('dir');
// console.log(dir);
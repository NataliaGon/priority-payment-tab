import React, { ComponentElement } from 'react';
import styles from './TabsExample.module.scss';
// import 'rc-tabs/assets/index.css';
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

            <div dir="rtl">
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
        
            {/* <h1>Tabs Example</h1>
            <div className={styles.tabsContainer}>
                <Tabs
                    defaultActiveKey="0"
                    tabBarPosition="right">
                    <TabPane tab={'My open invoces (3)'} key="0" >
                        <PanelContent id='1' />
                    </TabPane>
                    <TabPane tab={'Payments Made (3)'} key="1" >
                        <PanelContent id='2' />
                    </TabPane>
                </Tabs>
            </div> */}

        </div>
    );
}

export { TabsExample };
export default TabsExample;


// import 'rc-tabs/assets/index.css';
// import React from 'react';
// import classNames from 'classnames/bind';
// import ReactDOM from 'react-dom';
// import {Tabs,  TabPane } from 'priority-style-react';
// import TabContent from 'rc-tabs/lib/SwipeableTabContent';
// import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';


// const PanelContent = ({ id }) => (
//     <div style={{ height: 200, overflow: 'auto' }}>Tabular Data {id}</div>
// );

// export default class TabsExample extends React.Component {
//     state = {
//         activeKey: '1',
//         start: 0,
//     };

//     onChange = (activeKey) => {
//         console.log(`onChange ${activeKey}`);
//         this.setState({
//             activeKey,
//         });
//     }

//     onTabClick = (key) => {
//         console.log(`onTabClick ${key}`);
//         if (key === this.state.activeKey) {
//             this.setState({
//                 activeKey: '',
//             });
//         }
//     }


//     render() {
//         const start = this.state.start;
//         return (
//             <div >
//                 <h1>Tabs Example</h1>
//                 <Tabs
//                     // renderTabBar={() => <ScrollableInkTabBar onTabClick={this.onTabClick} />}
//                     // renderTabContent={() => <TabContent animatedWithMargin />}
//                     // activeKey={this.state.activeKey}
//                     // onChange={this.onChange}
//                     // defaultActiveKey="1"
//                 >
//                     <TabPane tab={`My open invoces (3)`} key="1">
//                         <PanelContent id={start} />
//                     </TabPane>
//                     <TabPane tab={`Payments Made (3)`} key="2">
//                         <PanelContent id={start + 1} />
//                     </TabPane>
//                 </Tabs>
//                 <div dir="rtl">
//                 <h1>Tabs Example RTL</h1>
//                 <Tabs
//                     // renderTabBar={() => <ScrollableInkTabBar onTabClick={this.onTabClick} />}
//                     // renderTabContent={() => <TabContent animatedWithMargin />}
//                     // activeKey={this.state.activeKey}
//                     // onChange={this.onChange}
//                     // defaultActiveKey="1"
//                 >
//                     <TabPane tab={`הפתיחות הפתוחות שלי (3)`} key="1">
//                         <PanelContent id={start} />
//                     </TabPane>
//                     <TabPane tab={`תשלומים שבוצעו (3)`} key="2">
//                         <PanelContent id={start + 1} />
//                     </TabPane>
//                 </Tabs>
//                 </div>
//             </div>
//         );
//     }
// }





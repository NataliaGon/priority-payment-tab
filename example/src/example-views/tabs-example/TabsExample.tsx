import React, { ComponentElement } from 'react';
import styles from './TabsExample.module.scss';
import { Tabs, TabPane } from 'priority-style-react';
import { Title } from 'priority-style-react';
import { GridContainer } from 'priority-style-react';

type PanelContentProperties = {
    id?: Object;
}

const PanelContent: (props: PanelContentProperties) => ComponentElement<PanelContentProperties, any> = (props) => {

    return (
        <div style={{ height: 200, overflow: 'auto' }}>Tabular Data {props.id}</div>
    );
}

const TabsExample: () => ComponentElement<PanelContentProperties, any> = () => {
 const grid = {
    gridColumn: 2/5
 }
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
            <Title skin='h1-blue'>Title's Example </Title>
            <Title text='title h1' skin='h1-blue' />
            <Title text='title h1' skin='h1-grey' />
            <Title text='title h2' skin='h2-blue' />
            <Title text='title h2' skin='h2-grey' />
            <Title text='title h4' skin='h4' />
            <Title skin='h1-blue'>Dark Background Title's Example </Title>
            <div style={{ background: '#000000' }}>
                <Title text='title h1' skin='h1-grey' background='dark-container' />
            </div>
            <div style={{ background: '#000000' }}>
                <Title text='title h2' skin='h2-grey' background='dark-container' />
            </div>
            <GridContainer columnsDesktop='12' gutterWidthDesktop='30px' paddingDesktop='30px' mobileBreakpoint='800' columnsMobile='6' paddingMobile="10px">
               <div style={{gridColumn: '2/5'}}><Title skin='h2-blue' >I am a grid container. To see my columns use dev tools. This tittle took 2,3,4 columns
                </Title></div> </GridContainer>
        </div>
    );
}

export { TabsExample };
export default TabsExample;


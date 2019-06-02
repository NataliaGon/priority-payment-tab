import * as React from 'react';
import classNames from 'classnames/bind';
import RcTabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import InkTabBar from 'rc-tabs/lib/InkTabBar';

import { ComponentBaseProperties } from '../../core';
import styles from './Tabs.module.scss';


const cx = classNames.bind(styles);

type TabsLayout = "desktop" | "mobile";
type TabBarPosition = "top" | "right" | "bottom" | "left";


interface TabsProperties extends ComponentBaseProperties {
  tabBarPosition?: TabBarPosition,
  activeKey?: string,
  defaultActiveKey?: string,

  //renderTabBar?: () => React.ReactNode,
  //renderTabContent?: () => React.ReactNode,
  onChange?: (key: string) => void,

  onTabClick?: (key: string) => void,

  layout?: TabsLayout,

  children?: React.ReactElement<any>[]
}

const Tabs: (props: TabsProperties) => React.ReactElement<TabsProperties> = (props: TabsProperties) => {
  return (
    <div className={ cx('component', props.layout, props.componentClasses) }>
      <RcTabs
        tabBarPosition={ props.tabBarPosition }
        defaultActiveKey={ props.defaultActiveKey }
        onChange={ props.onChange }
        renderTabBar={ () => <InkTabBar onTabClick={ props.onTabClick } /> }
        renderTabContent={ () => <TabContent /> }
      >
        { props.children }
      </RcTabs>
    </div>
  );
}

export default Tabs;
export { Tabs, TabsProperties, TabBarPosition };

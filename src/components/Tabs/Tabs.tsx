import * as React from 'react';
import classNames from 'classnames/bind';
import RcTabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import { ComponentBaseProperties, TextDirection } from '../../core';
import InkTabBar from './components/InkTabBar';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

interface TabsProperties extends ComponentBaseProperties {
  textDirection?: TextDirection;
  activeKey?: string,
  defaultActiveKey?: string,
  onChange?: (key: string) => void,
  onTabClick?: (key: string) => void,
  children?: React.ReactElement<any>[]
}

const Tabs: (props: TabsProperties) => React.ReactElement<TabsProperties> = (props: TabsProperties) => {

  return (
    <div className={ cx('component', props.componentClasses) }>
      <RcTabs
        defaultActiveKey={ props.defaultActiveKey }
        onChange={ props.onChange }
        renderTabBar={ () => <InkTabBar textDirection={ props.textDirection } onTabClick={ props.onTabClick } /> }
        renderTabContent={ () => <TabContent animated={ false } /> }
      >
        { props.children }
      </RcTabs>
    </div>
  );
}

export default Tabs;
export { Tabs, TabsProperties };

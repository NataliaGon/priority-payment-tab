/* eslint-disable react/prefer-stateless-function */
import SaveRef from 'rc-tabs/lib/SaveRef';
import TabBarRootNode from 'rc-tabs/lib/TabBarRootNode';
import TabBarTabsNode from 'rc-tabs/lib/TabBarTabsNode';
import * as React from 'react';
import { TextDirection } from '../../../core';
import InkTabBarNode from './InkTabBarNode';


export class InkTabBarProperties {
  onTabClick?: (key: string) => void = () => { };
  textDirection?: TextDirection = "ltr";
}

export default class InkTabBar extends React.Component<InkTabBarProperties> {
  render() {
    return (
      <SaveRef>
        { (saveRef, getRef) => (
          <TabBarRootNode saveRef={ saveRef } { ...this.props }>
            <TabBarTabsNode onTabClick={ this.props.onTabClick } saveRef={ saveRef } { ...this.props } />
            <InkTabBarNode saveRef={ saveRef } getRef={ getRef } textDirection={ this.props.textDirection } inkBarAnimated={ true } { ...this.props } />
          </TabBarRootNode>
        ) }
      </SaveRef>
    );
  }
}

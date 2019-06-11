/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

import TabBarTabsNode from 'rc-tabs/lib/TabBarTabsNode';
import TabBarRootNode from 'rc-tabs/lib/TabBarRootNode';
import SaveRef from 'rc-tabs/lib/SaveRef';
import InkTabBarNode from './InkTabBarNode';
import { TextDirection } from '../../../core';

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

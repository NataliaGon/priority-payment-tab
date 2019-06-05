import * as React from 'react';
import PropTypes from 'prop-types';
import TabBarNode from './TabBarNode';
import TabBarTabsNode from 'rc-tabs/lib/TabBarTabsNode';
import TabBarRootNode from 'rc-tabs/lib/InkTabBarNode';
import SaveRef from 'rc-tabs/lib/SaveRef';

export default class InkTabBar extends React.Component {
  render() {
    return (
      <SaveRef>
        {(saveRef, getRef) => (
          <TabBarRootNode saveRef={saveRef} {...this.props}>
            <TabBarTabsNode onTabClick={this.props.onTabClick} saveRef={saveRef} {...this.props} /> 
           <TabBarNode saveRef={saveRef} getRef={getRef} {...this.props} />
          </TabBarRootNode>
        )}
      </SaveRef>
    );
  }
}

InkTabBar.propTypes = {
  onTabClick: PropTypes.func,
};

InkTabBar.defaultProps = {
  onTabClick: () => {},
};

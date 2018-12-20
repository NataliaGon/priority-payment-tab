import React, { Component } from 'react';
import { SlidePanel } from "./components/SlidePanel";
import FullWidthPanel from "./components/Layout/FullWidthPanel";
import Title from "./components/Title";
import IconRoundButton from "./components/IconRoundButton";

import './styles/style.scss';
import { LabelWithIcon } from './components/LabelWithIcon';
import CheckBox from './components/CheckBox';
import Label from './components/Label';
import ContentPanel from './components/Layout/ContentPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlidePanel >
          <FullWidthPanel>
            <Title text="Advanced Search"></Title>
            <IconRoundButton componentClasses={[' icon-icon-long-arrow-left']}></IconRoundButton>
            <LabelWithIcon text="New Search" iconClassName="icon-icon-filter-big" badgeCounter={0}></LabelWithIcon>
            <LabelWithIcon text="Help" iconClassName="icon-question-circle" badgeCounter={0} textHref="#"></LabelWithIcon>
          </FullWidthPanel>
          <FullWidthPanel>
            <CheckBox text="Case Sensitive" skin='.' />
            <Label text="Sort table by rearranging filter order with drag and drop"></Label>
          </FullWidthPanel>
          <FullWidthPanel>
            <ContentPanel>
              <Label text="Customer Name"></Label>
            </ContentPanel>
          </FullWidthPanel>
        </SlidePanel>
      </div>
    );
  }
}

export default App;

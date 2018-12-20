import React, { Component } from 'react';
import { SlidePanel } from "./components/SlidePanel";
import FullWidthPanel from "./components/Layout/FullWidthPanel";
import SystemColor from "./constants/systemColors";
import Title from "./components/Title";
import IconRoundButton from "./components/IconRoundButton";

import './styles/style.scss';
import LabelWithIcon from './components/LabelWithIcon';
import SystemTextSize from './constants/systemTextSize';
import { HorizontalContentAlign } from './constants/contentAlign';
import CheckBox from './components/CheckBox';
import Label from './components/Label';
import ContentPanel from './components/Layout/ContentPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlidePanel >
          <FullWidthPanel bgColor={SystemColor.silver}>
            <Title text="Advanced Search" color={SystemColor.blue}></Title>
            <IconRoundButton iconClassName="icon-icon-long-arrow-left" ></IconRoundButton>
            <LabelWithIcon text="New Search" iconClassName="icon-icon-filter-big" badgeCounter="0" contentAlign={HorizontalContentAlign.left}></LabelWithIcon>
            <LabelWithIcon text="Help" iconClassName="icon-question-circle" badgeCounter="0" contentAlign={HorizontalContentAlign.right} textHref="#"></LabelWithIcon>
          </FullWidthPanel>
          <FullWidthPanel>
            <CheckBox labelText="Case Sensitive" labelColor={SystemColor.black} contentAlign={HorizontalContentAlign.left} textSize={SystemTextSize.medium} />
            <Label labelText="Sort table by rearranging filter order with drag and drop" contentAlign={HorizontalContentAlign.right} textSize={SystemTextSize.small} labelColor={SystemColor.black}></Label>
          </FullWidthPanel>
          <FullWidthPanel>
            <ContentPanel bgColor={SystemColor.silver}>
              <Label labelText="Customer Name" contentAlign={HorizontalContentAlign.left} textSize={SystemTextSize.small} labelColor={SystemColor.black}></Label>
            </ContentPanel>
          </FullWidthPanel>
        </SlidePanel>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './styles/style.scss';
import { SidePanel, StackPanel, RowPanel, Container, WrapPanel } from './priority-react-components/components/Layout';
import Title from './priority-react-components/components/Text/Title';
import CheckBox from './priority-react-components/components/Inputs/CheckBox';
import Label from './priority-react-components/components/Text/Label';
import Button from './priority-react-components/components/Inputs/Button';
import Icon from './priority-react-components/components/Icon';
import DropDown from './priority-react-components/components/Inputs/DropDown';
import TextInput from './priority-react-components/components/Inputs/TextInput/TextInput';
import Tag from './priority-react-components/components/Tag';
import CustomerName from './priority-react-components/components/Inputs/CustomerName/customerName';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidePanel>
          <StackPanel skin="header">
            <RowPanel alignItems="space-between">
              <Title text="Advanced Search"></Title>
              <Button skin="RoundStrokeIcon"><Icon fontIconClass="icon-icon-long-arrow-left" /></Button>
            </RowPanel>
            <RowPanel alignItems="space-between">
              <Container>
                <Icon fontIconClass="icon-icon-filter-big" ></Icon>
                <Label text="New Search" />
              </Container>
              <Container>
                <Icon fontIconClass="icon-question-circle" ></Icon>
                <Label textHref="#" text="Help"></Label>
              </Container>
            </RowPanel>
          </StackPanel>
          <StackPanel skin="padded-panel">
            <RowPanel alignItems="space-between">
              <Container>
                <CheckBox />
                <Label text="Case Sensitive"></Label>
              </Container>
              <Label text="Sort table by rearranging filter order with drag and drop"></Label>
            </RowPanel>
            {/* <StackPanel skin="light">
              <RowPanel><Label text="Customer No." /></RowPanel>
              <RowPanel>
                <DropDown></DropDown>
                <TextInput></TextInput>
              </RowPanel>
              <WrapPanel>
                <Tag text="test" />
                <Tag text="test" />
              </WrapPanel>
            </StackPanel> */}
            {/* <StackPanel skin="light">
              <RowPanel><Label text="Customer No." /></RowPanel>
              <RowPanel>
                <DropDown></DropDown>
                <TextInput></TextInput>
              </RowPanel>
              <WrapPanel>
                <Tag text="test" />
                <Tag text="test" />
              </WrapPanel>
            </StackPanel> */}
          </StackPanel>
          <CustomerName/>
        </SidePanel>
      </div>
    );
  }
}

export default App;

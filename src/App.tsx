import React, { Component } from 'react';
import './styles/style.scss';
import { SidePanel, StackPanel, RowPanel, Container } from './priority-react-components/components/Layout';
import Title from './priority-react-components/components/Text/Title';
import CheckBox from './priority-react-components/components/Inputs/CheckBox';
import Label from './priority-react-components/components/Text/Label';
import Button from './priority-react-components/components/Inputs/Button';
import Icon from './priority-react-components/components/IconComponent/Icon/icon';
// import Icon  from './priority-react-components/components/iconComponent/icon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidePanel>
          <StackPanel skin="header">
            <Title text="Advanced Search"></Title>
            <RowPanel alignItems="space-between">
              <Container>
                <Icon fontIconClass="icon-icon-filter-big" ></Icon>
                <Label text="New Search" />
              </Container>
              <Container>
                <Label textHref="#" text="Help"></Label>
              </Container>
            </RowPanel>
          </StackPanel>
          <StackPanel>
            <RowPanel alignItems="flex-start">
              <CheckBox />
              <Label text="Case Sensitive" />
            </RowPanel>
            <RowPanel alignItems="space-between">
              <Label text="Sort table by rearranging filter order with drag and drop"></Label>
            </RowPanel>
          </StackPanel>
          <StackPanel>
            <RowPanel>
              <Label text="Customer Name"></Label>
            </RowPanel>
          </StackPanel>
        </SidePanel>
      </div>
    );
  }
}

export default App;

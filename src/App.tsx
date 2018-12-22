import React, { Component } from 'react';
import './styles/style.scss';
import { SidePanel, StackPanel, RowPanel } from './priority-react-components/components/Layout';
import Title from './priority-react-components/components/Text/Title';
import CheckBox from './priority-react-components/components/Inputs/CheckBox';
import Label from './priority-react-components/components/Text/Label';
import Button from './priority-react-components/components/Inputs/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SidePanel>
          <StackPanel skin="light">
            <Title text="Advanced Search"></Title>
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

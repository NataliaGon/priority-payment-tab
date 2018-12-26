import React, { Component } from 'react';
import { SidePanel, StackPanel, RowPanel, Container, WrapPanel } from './priority-react-components/components/Layout';
import Title from './priority-react-components/components/Text/Title';
import CheckBox from './priority-react-components/components/Inputs/CheckBox';
import Label from './priority-react-components/components/Text/Label';
import Button from './priority-react-components/components/Inputs/Button';
import Icon from './priority-react-components/components/Icon';
import Tag from './priority-react-components/components/Tag';
import LineInput from './priority-react-components/components/Inputs/LineInput/lineInput';
import InputAutofill from './priority-react-components/components/Inputs/InputAutocomplete/InputAutofill';
import { PriorityIcon } from './priority-react-components/base-classes/PriorityIcon';
import Select from './priority-react-components/components/Inputs/Select';
import OptionItem from './priority-react-components/components/Inputs/Select/OptionItem/OptionItem';

class App extends Component {
  render() {


    return (
      <div className="App">
        <SidePanel>

          <StackPanel skin="header">
            <RowPanel>
              <Title>Advanced Search</Title>
              <Button skin="roundStrokeIcon"><Icon iconColor="blue" icon={PriorityIcon.arrowLeftLong} /></Button>
            </RowPanel>
            <RowPanel>
              <Container>
                <Icon icon={PriorityIcon.filterBig} counterValue={5}></Icon>
                <Label skin="large">New Search</Label>
              </Container>
              <Container>
                <Icon icon={PriorityIcon.questionCircle} ></Icon>
                <Label textHref="#">Help</Label>
              </Container>
            </RowPanel>
          </StackPanel>

          <StackPanel>
            <RowPanel alignItems="space-between">
              <Container>
                <CheckBox />
                <Label skin="regular-high-contrast">Case Sensitive</Label>
              </Container>
              <Label skin="small">Sort table by rearranging filter order with drag and drop</Label>
            </RowPanel>
          </StackPanel>

          <StackPanel skin="header">
            <RowPanel>
              <Title>Advanced Search</Title>
              <Button skin="roundStrokeIcon"><Icon iconColor="blue" icon={PriorityIcon.arrowLeftLong} /></Button>
            </RowPanel>
            <RowPanel>
              <Container>
                <Icon icon={PriorityIcon.filterBig} counterValue={5}></Icon>
              </Container>
              <Container>
                <Icon icon={PriorityIcon.questionCircle} ></Icon>
                <Label textHref="#">Help</Label>
              </Container>
              <LineInput />
            </RowPanel>
          </StackPanel>


          <StackPanel>
            <RowPanel alignItems="space-between">
              <Container>
                <CheckBox />
                <Label skin="regular-high-contrast">Case Sensitive</Label>
              </Container>
              <Label skin="small">Sort table by rearranging filter order with drag and drop</Label>
            </RowPanel>

            <StackPanel skin="light">
              <RowPanel>
                <Label skin="regular-high-contrast">Customer No.</Label>
              </RowPanel>
              <RowPanel>
                <Select>
                  <OptionItem key={1} iconName="icon-search-equal" value="1">Between</OptionItem>
                  <OptionItem key={2} iconName="icon-search-contains-v2" value="1">Between</OptionItem>
                </Select>
                <InputAutofill />
              </RowPanel>
              <WrapPanel>
                <Tag text="test" />
                <Tag text="test" />
              </WrapPanel>
            </StackPanel>
          </StackPanel>

          <StackPanel componentClasses={["position", "absolute", "bottom"]} skin="dark">
            <RowPanel alignItems="space-between" >
              <Container>
                <Icon icon={PriorityIcon.clear} />
                <Label skin="regular-high-contrast">Clear Search</Label>
              </Container>
              <Container width="250px" alignItems="spaceBetween">
                <Button skin="stroke" width="regularFixed">Save</Button>
                <Button skin="regular" width="regularFixed">Apply</Button>
              </Container>
            </RowPanel>
          </StackPanel>
        </SidePanel>
      </div>
    );
  }
}

export default App;

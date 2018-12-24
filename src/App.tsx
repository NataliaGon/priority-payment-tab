import React, { Component } from 'react';
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
import DropDownItem from './priority-react-components/components/Inputs/DropDown/DropDownItem/DropDownItem';
import LineInput from './priority-react-components/components/Inputs/LineInput/lineInput';


class App extends Component {
  render() {
  
   
    return (
      <div className="App">
        <SidePanel>

          <StackPanel skin="header">
            <RowPanel>
              <Title>Advanced Search</Title>
              <Button skin="roundStrokeIcon"><Icon textColor="blue" fontIconClass="icon-icon-long-arrow-left" /></Button>
            </RowPanel>
            <RowPanel>
              <Container>
                <Icon fontIconClass="icon-icon-filter-big" counterValue={5}></Icon>
                <Label skin="large">New Search</Label>
              </Container>
              <Container>
                <Icon fontIconClass="icon-question-circle" ></Icon>
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

          <StackPanel  skin="header">
            <RowPanel>
              <Title>Advanced Search</Title>
              <Button skin="roundStrokeIcon"><Icon textColor="blue" fontIconClass="icon-icon-long-arrow-left" /></Button>
            </RowPanel>
            <RowPanel>
              <Container>
                <Icon fontIconClass="icon-icon-filter-big" counterValue={5}></Icon>
                <Label skin="large">New Search</Label>
              </Container>
              <Container>
                <Icon fontIconClass="icon-question-circle" ></Icon>
                <Label textHref="#">Help</Label>
              </Container>
              <LineInput/>
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
                <DropDown>
                  <DropDownItem key={1} iconName="icon-search-equal" value="1">Between</DropDownItem>
                  <DropDownItem key={2} iconName="icon-search-contains-v2" value="1">Between</DropDownItem>
                </DropDown>
                {/* <TextInput></TextInput> */}
                {/* <DropDown>
                  <DropDownItem key={1} iconName="icon-search-equal" value="1">Search Between</DropDownItem>
                  <DropDownItem key={2} iconName="icon-search-contains-v2" value="1">Search Between</DropDownItem>
                </DropDown> */}
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
                <Icon fontIconClass="icon-icon---clear-search" />
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

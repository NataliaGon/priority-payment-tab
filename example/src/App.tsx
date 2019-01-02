import React, { Component } from 'react';
import {
  SidePanel,
  StackPanel, RowPanel, Container, WrapPanel, ScrollPanel,
  Title, CheckBox, Label, Button, Icon, Tag, LineInput, Select,
  GeneralInput,
  PriorityIcon, AutoFill
} from 'priority-style-react';
import { optionDropDown } from './optionDropDown';


class App extends Component {
  render() {


    return (
      <div className="App">
        <SidePanel>
          <ScrollPanel gradient>
            <StackPanel className="header" skin="silver">
              <RowPanel paddingBottom={true} paddingTop={true}>
                <Title>Advanced Search</Title>
                <Button skin="roundStrokeIcon"><Icon iconColor="blue" icon={PriorityIcon.arrowLeftLong} /></Button>
              </RowPanel>
              <RowPanel paddingBottom={true} paddingTop={true}>
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
              <RowPanel alignItems="space-between" paddingBottom={true} paddingTop={true}>
                <Container>
                  <CheckBox />
                  <Label skin="bold">Case Sensitive</Label>
                </Container>
                <Label skin="small-bold">Sort table by rearranging filter order with drag and drop</Label>
              </RowPanel>
            </StackPanel>

            <StackPanel skin="light">
              <RowPanel paddingBottom={true} paddingTop={true}>
                <Title>Advanced Search</Title>
                <Button skin="roundStrokeIcon"><Icon iconColor="blue" icon={PriorityIcon.arrowLeftLong} /></Button>
              </RowPanel>
              <RowPanel paddingBottom={true} paddingTop={true}>
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
              <RowPanel alignItems="space-between" paddingBottom={true} paddingTop={true}>
                <Container>
                  <CheckBox />
                  <Label skin="bold">Case Sensitive</Label>
                </Container>
                <Label skin="small-bold">Sort table by rearranging filter order with drag and drop</Label>
              </RowPanel>
            </StackPanel>

            <StackPanel >
              <Container ContainerWidth="fullWidth" >
                <RowPanel>
                  <Label skin="regular-high-contrast">Customer No.</Label>
                </RowPanel>
                <RowPanel paddingTop={true}>
                  <Select options={optionDropDown} />
                  <GeneralInput inputWidth="large" clearable={true}/>
                </RowPanel>
                <WrapPanel>
                  <Tag text="test" />
                  <Tag text="test" />
                </WrapPanel>
              </Container>
            </StackPanel>

            <StackPanel>
              <RowPanel alignItems="space-between" paddingBottom={true} paddingTop={true}>
                <Container>
                  <CheckBox />
                  <Label skin="bold">Case Sensitive</Label>
                </Container>
                <Label skin="small-bold">Sort table by rearranging filter order with drag and drop</Label>
              </RowPanel>
            </StackPanel>

            <StackPanel >
              <Container ContainerWidth="fullWidthActive" closable={true} iconReorder={true}>
                <RowPanel >
                  <Label skin="regular-high-contrast">Customer No.</Label>
                </RowPanel>
                <RowPanel paddingBottom={true} paddingTop={true}>
                  <Select options={optionDropDown} />
                  <AutoFill />
                </RowPanel>
                <WrapPanel>
                  <Tag text="test" />
                  <Tag text="test" />
                </WrapPanel>
              </Container>
            </StackPanel>

            <StackPanel>
              <RowPanel alignItems="space-between" paddingBottom={true} paddingTop={true}>
                <Container>
                  <CheckBox />
                  <Label skin="bold">Case Sensitive</Label>
                </Container>
                <Label skin="small-bold">Sort table by rearranging filter order with drag and drop</Label>
              </RowPanel>
            </StackPanel>

            <StackPanel componentClasses={["position", "absolute", "bottom"]} skin="dark">
              <RowPanel alignItems="space-between" >
                <Container>
                  <Icon icon={PriorityIcon.clear} />
                  <Label skin="regular-high-contrast">Clear Search</Label>
                </Container>
                <Container ContainerWidth="250px" alignItems="spaceBetween">
                  <WrapPanel>
                    <Button skin="secondary" width="regularFixed">Save</Button>
                    <Button skin="regular" width="regularFixed">Apply</Button>
                  </WrapPanel>
                </Container>
              </RowPanel>
            </StackPanel>

          </ScrollPanel>
        </SidePanel>
      </div>
    );
  }
}

export default App;


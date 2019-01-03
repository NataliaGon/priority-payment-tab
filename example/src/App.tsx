import React, { Component } from 'react';
import {
  SidePanel,
  StackPanel, RowPanel, Container, WrapPanel, ScrollPanel,
  Title, CheckBox, Label, Button, Icon, Tag, LineInput, Select,
  FooterSidePanel,
  PriorityIcon, AutoFill, Form
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

            <StackPanel >
              <Container ContainerWidth="fullWidth" >
                <RowPanel>
                  <Label skin="regular-high-contrast">Customer No.</Label>
                </RowPanel>
                <RowPanel paddingTop={true} paddingBottom={true}>
                  <Select options={optionDropDown} />
                  <Select options={optionDropDown} width="large" />
                </RowPanel>
                <WrapPanel>
                  <Tag text="test" />
                  <Tag text="test" />
                </WrapPanel>
              </Container>
            </StackPanel>

            <StackPanel >
              <Container ContainerWidth="fullWidthActive" closable={true} draggable={true}>
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
            <Form />
           
            <FooterSidePanel />
            </ScrollPanel>
        </SidePanel>
      </div>
    );
  }
}

export default App;


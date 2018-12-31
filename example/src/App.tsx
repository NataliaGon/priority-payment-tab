import React, { Component } from 'react';
import { SidePanel,
	StackPanel, RowPanel, Container, WrapPanel, ScrollPanel,
	Title, CheckBox, Label, Button, Icon, Tag, LineInput, Select, OptionItem,
	PriorityIcon
} from 'priority-style-react';


class App extends Component {
  render() {


    return (
      <div className="App">
        <SidePanel>
   <ScrollPanel gradient>
          <StackPanel className="header" skin="silver">
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


          <StackPanel  skin="silver">
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
            
              </RowPanel>
              <WrapPanel>
                <Tag text="test" />
                <Tag text="test" />
              </WrapPanel>
            </StackPanel>
            <StackPanel skin="light">
              <RowPanel>
                <Label skin="regular-high-contrast">Customer No.</Label>
              </RowPanel>
              <RowPanel>
               
            
              </RowPanel>
              <WrapPanel>
                <Tag text="test" />
                <Tag text="test" />
              </WrapPanel>
            </StackPanel>
            <StackPanel skin="light">
              <RowPanel>
                <Label skin="regular-high-contrast">Customer No.</Label>
              </RowPanel>
              <RowPanel>
                
             
              </RowPanel>
              <WrapPanel>
                <Tag text="test" />
                <Tag text="test" />
              </WrapPanel>
            </StackPanel>
       

          <StackPanel componentClasses={["position", "absolute", "bottom"]} skin="dark">
            <RowPanel alignItems="space-between" >
              <Container>
                <Icon icon={PriorityIcon.clear} />
                <Label skin="regular-high-contrast">Clear Search</Label>
              </Container>
              <Container width="250px" alignItems="spaceBetween">
                <Button skin="secondary" width="regularFixed">Save</Button>
                <Button skin="regular" width="regularFixed">Apply</Button>
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


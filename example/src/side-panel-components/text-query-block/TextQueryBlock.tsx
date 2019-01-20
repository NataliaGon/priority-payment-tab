import * as React from 'react';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, AutoFill} from 'priority-style-react';
import { Label, StackPanel, Container, RowPanel, WrapPanel, Select, Tag, Button, Input, Icon, PriorityIcon } from 'priority-style-react';
import { optionDropDown } from './../../optionDropDown';


interface TextQueryBlockBlockProperties extends ComponentBaseProperties {

}
interface TextQueryBlockBlockState extends ComponentBaseState {
  
}
export class TextQueryBlock extends ComponentBase<TextQueryBlockBlockProperties, TextQueryBlockBlockState> {

    render() {
        return (
          <StackPanel >
          <Container roundConer > 
                <RowPanel>
                  <div style={{marginLeft:"-10px"}}>
                  <Label size="regular-hight-contrast">Customer No. <Icon icon={PriorityIcon.closeSmall}/></Label>
                  </div>
                </RowPanel>
                <RowPanel paddingTop paddingBottom>
                  <Select options={optionDropDown} isBlue/>
                  <Input skin="line" size="large">
                   
                    <Button shape="round" size="small" elevated={false} icon={PriorityIcon.done}/>
                    <Icon icon={PriorityIcon.closeSmall}/>
                  </Input>
                </RowPanel>
                <WrapPanel>
                  <Tag text="test" />
                  <Tag text="test" />
                </WrapPanel>
            </Container>
            </StackPanel>
        )}}
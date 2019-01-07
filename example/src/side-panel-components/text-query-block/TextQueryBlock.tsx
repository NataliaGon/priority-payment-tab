import * as React from 'react';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, AutoFill} from 'priority-style-react';
import { Label, StackPanel, Container, RowPanel, WrapPanel, Select, Tag } from 'priority-style-react';
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
                  <Label skin="regular-high-contrast">Customer No.</Label>
                </RowPanel>
                <RowPanel paddingTop paddingBottom>
                  <Select options={optionDropDown} isBlue/>
                  <AutoFill/>
                </RowPanel>
                <WrapPanel>
                  <Tag text="test" />
                  <Tag text="test" />
                </WrapPanel>
            </Container>
            </StackPanel>
        )}}
import * as React from 'react';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, AutoFill} from 'priority-style-react';
import { Label, StackPanel, Container, RowPanel, WrapPanel, Select, Input,Tag } from 'priority-style-react';
import { optionDropDown } from './../../optionDropDown';
// import styles from "./CustomerForm.module.scss";

interface TextQueryBlockBlockProperties extends ComponentBaseProperties {
    
}
interface TextQueryBlockBlockState extends ComponentBaseState {
  
}
export class TextQueryBlock extends ComponentBase<TextQueryBlockBlockProperties, TextQueryBlockBlockState> {

    render() {
        return (

            <StackPanel >
              <Container ContainerWidth="fullWidth"  >
                <RowPanel>
                  <Label skin="regular-high-contrast">Customer No.</Label>
                </RowPanel>
                <RowPanel paddingTop={true} paddingBottom={true}>
                  <Select options={optionDropDown} />
                  <AutoFill/>
                </RowPanel>
                <WrapPanel>
                  <Tag text="test" />
                  <Tag text="test" />
                </WrapPanel>
              </Container>
            </StackPanel>


        )}}
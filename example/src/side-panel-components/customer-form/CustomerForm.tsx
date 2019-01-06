import * as React from 'react';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase} from 'priority-style-react';
import { Label, StackPanel, Container, RowPanel, WrapPanel, Select, Input,Tag } from 'priority-style-react';
import { optionDropDown } from './../../optionDropDown';
// import styles from "./CustomerForm.module.scss";

interface CustomerFormBlockProperties extends ComponentBaseProperties {
    
}
interface CustomerFormBlockState extends ComponentBaseState {
  
}
export class CustomerForm extends ComponentBase<CustomerFormBlockProperties, CustomerFormBlockState> {

    render() {
        return (

            <StackPanel >
              <Container ContainerWidth="fullWidth"  >
                <RowPanel>
                  <Label skin="regular-high-contrast">Customer No.</Label>
                </RowPanel>
                <RowPanel paddingTop={true} paddingBottom={true}>
                  <Select options={optionDropDown} />
                  <Input inputWidth="large" clearable={true} />
                </RowPanel>
                <WrapPanel>
                  <Tag text="test" />
                  <Tag text="test" />
                </WrapPanel>
              </Container>
            </StackPanel>


        )}}
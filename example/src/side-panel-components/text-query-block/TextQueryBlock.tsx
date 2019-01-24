import * as React from 'react';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, AutoFill} from 'priority-style-react';
import { Label, StackPanel, Container, RowPanel, WrapPanel, Select, Tag, Button } from 'priority-style-react';
import { optionDropDown } from './../../optionDropDown';
import stylesMain from '../../AppStyles.module.scss';

interface TextQueryBlockBlockProperties extends ComponentBaseProperties {

}
interface TextQueryBlockBlockState extends ComponentBaseState {
  
}
export class TextQueryBlock extends ComponentBase<TextQueryBlockBlockProperties, TextQueryBlockBlockState> {

    render() {
        return (
          <div className={stylesMain.stackPanel}>
          <Container roundConer > 
          <div className={stylesMain.rowPanel}>
                  <div style={{marginLeft:"-10px"}}>
                  <Label skin="regular-hight-contrast">Customer No.</Label>
                  </div>
                </div>
                <div className={stylesMain.rowPanel} style={{paddingBottom:"10px", paddingTop:"10px" }}>
                  <Select options={optionDropDown} isBlue/>
                  <AutoFill isMultiselect >
                  </AutoFill>
                </div>
                <WrapPanel>
                  <Tag text="test" />
                  <Tag text="test" />
                </WrapPanel>
            </Container>
            </div>
        )}}
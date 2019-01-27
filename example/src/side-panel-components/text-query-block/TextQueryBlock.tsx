import * as React from 'react';
import { Label, StackPanel, Container, RowPanel, WrapPanel, Select, Tag, Button } from 'priority-style-react';
import { optionDropDown } from './../../optionDropDown';
import stylesMain from '../../AppStyles.module.scss';


export function TextQueryBlock() {


        return (
          <div className={stylesMain.stackPanel}>
          <Container roundConer activeHover> 
          <div className={stylesMain.rowPanel}>
                  <div style={{marginLeft:"-10px"}}>
                  <Label skin="regular-hight-contrast">Customer No.</Label>
                  </div>
                </div>
                {/* <div className={stylesMain.rowPanel} style={{paddingBottom:"10px", paddingTop:"10px" }}>
                  <Select options={optionDropDown} isBlue/>
                  <AutoFill isMultiselect >
                  </AutoFill>
                </div>
                <WrapPanel>
                  <Tag text="test" />
                  <Tag text="test" />
                </WrapPanel> */}
            </Container>
            </div>
        )}
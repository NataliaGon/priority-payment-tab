import * as React from 'react';

import { ComponentBaseProperties,  ComponentBase, PriorityIcon } from 'priority-style-react';
import { Label, Icon, Button, StackPanel,  RowPanel, WrapPanel } from 'priority-style-react';
import styles from "./FooterBlock.module.scss";



export function FooterBlock(){
        return (
            <div className={styles.component}>
                <StackPanel skin="dark" >
                    <RowPanel>
                        <div style={{ display: "flex",  cursor: "pointer"}}>
                            <Icon icon={PriorityIcon.clear} iconColor="white" />
                            <Label skin="bold" textColor="white">Clear Search</Label>
                        </div>
                        <div style={{ display: "flex" }}>
                            <WrapPanel>
                                <Button width="regularFixed" skin="stroke"  darkContainer size="large">Save as new</Button>
                                <Button width="regularFixed" skin="secondary" size="large" >Save & Apply</Button>
                                <Button width="regularFixed" darkContainer size="large">Apply</Button>
                            </WrapPanel>
                        </div>
                    </RowPanel>
                </StackPanel>
            </div>
        )
    }


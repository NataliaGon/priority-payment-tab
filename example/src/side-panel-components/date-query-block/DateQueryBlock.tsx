import * as React from "react";

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from 'priority-style-react';
import { StackPanel, Container, RowPanel, Label, Input, Select, Icon } from 'priority-style-react';

import styles from './DateQueryBlock.module.scss';
import {optionDropDown} from './../../optionDropDown';


class DateQueryBlockProperties extends ComponentBaseProperties {

}

interface DateQueryBlockState extends ComponentBaseState {
}

export class DateQueryBlock extends ComponentBase<DateQueryBlockProperties, DateQueryBlockState> {
    render() {
        return (
            <StackPanel >
            <Container roundConer >
                    <RowPanel paddingBottom={true}  >
                    <div style={{marginLeft:"-10px"}}>
                        <Label>Due Date</Label>
                    </div>
                    </RowPanel>
                    <RowPanel>
                        <Select options={optionDropDown} width="medium" isBlue/>
                        <div className={styles.spaceHolder}>
                            <Label>From</Label>
                        </div>
                        <Select options={optionDropDown} width="small" />
                        <div className={styles.spaceHolder}>
                            <Label>To</Label>
                        </div>
                        <Select options={optionDropDown} width="small" />
                    </RowPanel>
                    <RowPanel paddingBottom={true} paddingTop={true} >
                        <div className={styles.spaceHolderBig}></div>
                        <div className={styles.spaceHolder}></div>
                        <Input inputWidth="small" label="03/02/19" >
                            <Icon icon={PriorityIcon.calendar} iconColor="grey" />
                        </Input>
                        <div className={styles.spaceHolder}></div>
                        <Input inputWidth="small" label="03/02/19">
                            <Icon icon={PriorityIcon.calendar} iconColor="grey" />
                        </Input>
                    </RowPanel>
                    <RowPanel alignItems="flex-end">
                        <Label>Sort</Label>
                    </RowPanel>  
            </Container>
            </StackPanel>
        )
    }
}

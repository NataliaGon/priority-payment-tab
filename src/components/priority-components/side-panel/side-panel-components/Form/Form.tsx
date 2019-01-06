import * as React from "react";

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from '../../../../../core';
import { StackPanel, Container, RowPanel, Label, GeneralInput, Select, Icon } from '../../../../base-components';

import styles from './Form.module.scss';

export const optionDropDown = [{
    iconName: "icon-search-equal",
    name: "Between"
}, {
    iconName: "icon-search-equal",
    name: "Between"
}
];

class FormProperties extends ComponentBaseProperties {

}

interface FormState extends ComponentBaseState {
}

export class Form extends ComponentBase<FormProperties, FormState> {
    render() {
        return (
            <StackPanel >
                <Container ContainerWidth="fullWidth">
                    <RowPanel paddingBottom={true}  >
                        <Label>Due Date</Label>
                    </RowPanel>
                    <RowPanel>
                        <Select options={optionDropDown} width="medium" />
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
                        <GeneralInput inputWidth="small" label="03/02/19" >
                            <Icon icon={PriorityIcon.calendar} iconColor="grey" />
                        </GeneralInput>
                        <div className={styles.spaceHolder}></div>
                        <GeneralInput inputWidth="small" label="03/02/19">
                            <Icon icon={PriorityIcon.calendar} iconColor="grey" />
                        </GeneralInput>
                    </RowPanel>
                    <RowPanel alignItems="flex-end">
                        <Label>Sort</Label>
                    </RowPanel>
                </Container>
            </StackPanel>
        )
    }
}

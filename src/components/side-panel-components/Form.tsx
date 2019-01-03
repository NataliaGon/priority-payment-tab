import * as React from "react";
import classNames from 'classnames';
import styles from  './Form.module.scss';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import { StackPanel, Container, RowPanel, WrapPanel } from '../Layout';
import { Label } from '../Text';
import { GeneralInput } from '../Inputs';
import {Select} from '../Inputs/Select/Select';
import { optionDropDown } from '../../constants/optionDropDown';




class FormProperties extends ComponentBaseProperties {


}

interface FormState extends ComponentBaseState {

}

export class Form extends ComponentBase<FormProperties, FormState> {
    render() {
        return (
            <StackPanel >
                <Container ContainerWidth="fullWidth">
                    <RowPanel paddingBottom={true} paddingTop={true} >
                        <Label>Due Date</Label>
                    </RowPanel>
                    <div className={styles.component}>
                       <Select options={optionDropDown} />
                        <Label>From</Label>
                        <Select options={optionDropDown} />
                        <Label>To</Label>
                        <Select options={optionDropDown} />
                    </div>
                    <RowPanel paddingBottom={true} paddingTop={true} alignItems="flex-end">
                        <WrapPanel>
                            <GeneralInput inputWidth="medium"></GeneralInput>
                            <GeneralInput inputWidth="medium"></GeneralInput>
                        </WrapPanel>
                    </RowPanel>
                    <RowPanel alignItems="flex-end">
                        <Label>Sort</Label>
                    </RowPanel>
                </Container>
            </StackPanel>
        )
    }
}
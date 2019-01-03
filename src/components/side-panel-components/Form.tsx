import * as React from "react";
import classNames from 'classnames';
import styles from './Form.module.scss';
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from '../../base-classes';
import { StackPanel, Container, RowPanel, WrapPanel } from '../Layout';
import { Label } from '../Text';
import { GeneralInput } from '../Inputs';
import { Select } from '../Inputs/Select/Select';
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
                        <GeneralInput inputWidth="small"></GeneralInput>
                        <div className={styles.spaceHolder}></div>
                        <GeneralInput inputWidth="small"></GeneralInput>
                    </RowPanel>
                    <RowPanel alignItems="flex-end">
                        <Label>Sort</Label>
                    </RowPanel>
                </Container>
            </StackPanel>
        )
    }
}
import * as React from 'react';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from 'priority-style-react';
import { Label, Icon, Button, StackPanel, Container, RowPanel, WrapPanel } from 'priority-style-react';
import styles from "./FooterBlock.module.scss";



interface FooterBlockProperties extends ComponentBaseProperties {

}

interface FooterBlockState extends ComponentBaseState {

}

export class FooterBlock extends ComponentBase<FooterBlockProperties, FooterBlockState> {

    render() {
        return (
            <div className={styles.component}>
                <StackPanel skin="dark">
                    <RowPanel alignItems="space-between" >
                        <div style={{ display: "flex" }}>
                            <Icon icon={PriorityIcon.clear} iconColor="white" />
                            <Label skin="regular-high-contrast" textColor="white">Clear Search</Label>
                        </div>
                        <div style={{ display: "flex" }}>
                            <WrapPanel>
                                <Button skin="stroke" width="regularFixed" >Save as new</Button>
                                <Button skin="secondary" width="regularFixed" >Save & Apply</Button>
                                <Button skin="regular" width="regularFixed">Apply</Button>
                            </WrapPanel>
                        </div>
                    </RowPanel>
                </StackPanel>
            </div>
        )
    }
}

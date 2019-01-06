import * as React from 'react';

import { ComponentBaseProperties, ComponentBaseState, ComponentBase, PriorityIcon } from "../../../../../core";
import { Label, Icon, Button, StackPanel, Container, RowPanel, WrapPanel } from '../../../../base-components';

import styles from "./FooterSidePanel.module.scss";



interface FooterSidePanelProperties extends ComponentBaseProperties {

}

interface FooterSidePanelState extends ComponentBaseState {

}

export class FooterSidePanel extends ComponentBase<FooterSidePanelProperties, FooterSidePanelState> {

    render() {
        return (
            <div className={styles.component}>
                <StackPanel skin="dark">
                    <RowPanel alignItems="space-between" >
                        <Container>
                            <Icon icon={PriorityIcon.clear} iconColor="white" />
                            <Label skin="regular-high-contrast" textColor="white">Clear Search</Label>
                        </Container>
                        <Container ContainerWidth="250px" alignItems="spaceBetween">
                            <WrapPanel>
                                <Button skin="stroke" width="regularFixed" >Save as new</Button>
                                <Button skin="secondary" width="regularFixed" >Save & Apply</Button>
                                <Button skin="regular" width="regularFixed">Apply</Button>
                            </WrapPanel>
                        </Container>
                    </RowPanel>
                </StackPanel>
            </div>
        )
    }
}

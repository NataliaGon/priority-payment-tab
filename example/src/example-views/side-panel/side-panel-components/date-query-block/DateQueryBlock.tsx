import * as React from 'react';
import { Container, Icon, Input, Label, PriorityIcon, Select, ToggleSwitch } from 'priority-style-react';
import { optionDropDown } from '../optionDropDown';

import stylesMain from '../../SidePanelExample.module.scss';
import styles from './DateQueryBlock.module.scss';

export function DateQueryBlock() {

    return (
        <div className={stylesMain.stackPanel}>
            <Container roundConer>
                <div className={stylesMain.rowPanel} style={{ marginLeft: "-10px" }}>
                    <Label skin="bold">Due Date</Label>
                </div>
                <div className={stylesMain.rowPanel} style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                    <Select options={optionDropDown} width="medium" isBlue />
                    <div className={styles.spaceHolder}>
                        <Label>From</Label>
                    </div>
                    <Select options={optionDropDown} width="small" />
                    <div className={styles.spaceHolder}>
                        <Label>To</Label>
                    </div>
                    <Select options={optionDropDown} width="small" />
                </div>
                <div className={stylesMain.rowPanel} style={{ paddingBottom: "10px", paddingTop: "10px" }}>
                    <div className={styles.spaceHolderBig} />
                    <div className={styles.spaceHolder} />
                    <Input size="small" placeholder="03/02/19">
                        <Icon icon={PriorityIcon.calendar} iconColor="grey" />
                    </Input>
                    <div className={styles.spaceHolder} />
                    <Input size="small" placeholder="03/02/19">
                        <Icon icon={PriorityIcon.calendar} iconColor="grey" />
                    </Input>
                </div>
                <div className={stylesMain.rowPanel} style={{ justifyContent: "flex-end" }}>
                    <Label>Sort</Label>
                    <ToggleSwitch checked={true} onChange={(value) => {}}/>
                </div>
            </Container>
        </div>
    );
}
